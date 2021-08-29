import { app, BrowserWindow, ipcMain, screen } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    x: 810,
    y: 0,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
    // alwaysOnTop: true
  });

  mainWindow.webContents.session.webRequest.onHeadersReceived(
    { urls: ['*://*/*'] },
    ({ responseHeaders }, callback) => {
      if (responseHeaders!['X-Frame-Options']) {
        delete responseHeaders!['X-Frame-Options'];
      } else if (responseHeaders!['x-frame-options']) {
        delete responseHeaders!['x-frame-options'];
      }

      callback({ cancel: false, responseHeaders });
    }
  );

  if (isProd) {
    await mainWindow.loadURL('app://./index.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}`);
  }
  
  ipcMain.on("renderApp", async (_, {deviceUrl}) => {
    const deviceWindow = createWindow("main", {
      width: 50,
      height: screen.getPrimaryDisplay().workAreaSize.height,
      transparent: true,
      autoHideMenuBar: true,
    })
  
    if (isProd) {
      await deviceWindow.loadURL(`app://.${deviceUrl}/.html`);
    } else {
      const port = process.argv[2];
      await deviceWindow.loadURL(`http://localhost:${port}${deviceUrl}`);
    }
  })
})();


app.on('window-all-closed', () => {
  app.quit();
});

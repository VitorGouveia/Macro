const { app, BrowserWindow, globalShortcut } = require('electron')
const url = require('./url')

function createWindow () {
  const win = new BrowserWindow({
    width: 550,
    height: 350,
    x: 810,
    y: 0,
    alwaysOnTop: true,
    frame: false,
    icon: __dirname + '/florescer.png',
    webPreferences: {
      nodeIntegration: true
    },
  })

  win.loadURL(url.liveServer)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
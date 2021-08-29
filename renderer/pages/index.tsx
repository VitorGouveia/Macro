import { FC, FormEvent, useState } from 'react';
import isElectron from "is-electron"
import { useRouter } from "next/router"
import { Button } from "../components/Button"

import android from "../android.png"
import ios from "../ios.png"

const Home: FC = (): JSX.Element => {
  const [url, setUrl] = useState("")
  const [showUrl, setShowUrl] = useState(false)

  const isReadytoShowUrl = showUrl === true && !!url === true

  const handleForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const android = event.target[0].checked
    const ios = event.target[1].checked
    const none = event.target[2].checked

    let url = ""
    if(android) {
      url = "/devices/android"
    } else if(ios) {
      url = "/devices/ios"
    } else {}

    if(!!url === true && isElectron()) {
      const ipcRenderer = window.require("electron").ipcRenderer
  
      ipcRenderer.send("renderApp", {
        deviceUrl: url
      })
    }
  }

  return (
    <>
      <main className="w-screen h-screen bg-primary-800 flex justify-center">
        {isReadytoShowUrl ? (
          <>
            <iframe className="w-full h-full" src={url} frameBorder="0" />
          </>
        ) : (
          <form action="#" onSubmit={handleForm} className="w-10/12 h-auto flex flex-col items-center justify-center">
            <section className="w-full p-4">
              <h3 className="text-primary-100 font-sans text-2xl text-center mb-4">Where would you like to view your application?</h3>
              <ul className="w-full flex flex-row items-center justify-evenly">
                <li className="flex flex-col items-center">
                  <label className="flex flex-col-reverse w-auto bg-gray-700 p-4 rounded-md" htmlFor="android">
                    <span className="text-center text-primary-100 font-bold mt-2">Android</span>
                    <img width="50" src={android.src} alt="android" />
                  </label>
                  <input required className="mt-4 w-full" type="radio" id="android" name="device" />
                </li>
                <li className="flex flex-col items-center">
                  <label className="flex flex-col-reverse w-auto bg-gray-700 p-4 rounded-md" htmlFor="iphone">
                    <span className="text-center text-primary-100 font-bold mt-2">iOS</span>
                    <img width="100" src={ios.src} alt="iOS/Iphone" />
                  </label>

                  <input required className="mt-4 w-full" type="radio" id="iphone" name="device" />
                </li>
                <li className="flex flex-col items-center">
                  <label className="text-center text-primary-100 font-bold w-auto bg-gray-700 p-4 rounded-md" htmlFor="none">
                    none
                  </label>

                  <input required className="mt-4 w-full" type="radio" id="none" name="device" />
                </li>
              </ul>
            </section>

            <input
              required
              name="url"
              className="w-11/12 p-4 pl-6 bg-primary-700 rounded-md outline-none border-2 border-gray-700 text-gray-200 placeholder-gray-500 hover:bg-primary-900 focus:bg-primary-900 focus:border-primary-200 duration-200"
              onChange={event => setUrl(event.target.value)}
              placeholder="url of your project" type="url"
            />

            <Button
              onClick={() => {
                // setShowUrl(true)
              }}
              className="mt-4 bg-accent pointer-events-auto outline-none focus:outline-none hover:bg-accent-hover duration-200 focus:bg-accent-hover focus:ring-2 focus:ring-offset-gray-700 focus:ring-indigo-500">
                See my project 💖
            </Button>
          </form>
        )}
      </main>
    </>
  );
}

export default Home;

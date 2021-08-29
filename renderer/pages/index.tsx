import { FC, useState } from 'react';

import { Button } from "../components/Button"

const Home: FC = (): JSX.Element => {
  const [url, setUrl] = useState("")
  const [showUrl, setShowUrl] = useState(false)

  const isReadytoShowUrl = showUrl === true && !!url === true

  return (
    <>
      <main className="w-screen h-screen bg-primary-800 flex justify-center">
        {isReadytoShowUrl ? (
          <>
            <iframe className="w-full h-full" src={url} frameBorder="0" />
          </>
        ) : (
          <form action="#" className="w-10/12 h-auto flex flex-col items-center justify-center">
            <input
              required
              className="w-11/12 p-4 pl-6 bg-primary-700 rounded-md outline-none border-2 border-gray-700 text-gray-200 placeholder-gray-500 hover:bg-primary-900 focus:bg-primary-900 focus:border-primary-200 duration-200"
              onChange={event => setUrl(event.target.value)}
              placeholder="url of your project" type="url"
            />

            <Button
              onClick={() => {
                console.log("hey")
                setShowUrl(true)
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

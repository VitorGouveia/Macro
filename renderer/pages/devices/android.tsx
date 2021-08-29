import { FC } from "react"
import { useRouter } from "next/router"

import androidFrame from "../../android.png"

const Android: FC = () => {
  const router = useRouter()
  return (
    <section className="w-screen h-screen overflow-x-hidden overflow-y-hidden flex items-center justify-center bg-gray-900">
      <iframe
        style={{
          zIndex: 1,
          width: `${318}px`,
          height: `90vh`,
          position: "absolute",
          top: "51%",
          left: "50%",
          borderRadius: "11px",
          transform: "translate(-50%, -50%)"
        }}
        src={router.query.url as string}
        frameBorder="0" />
      <img style={{ pointerEvents: "none" }}  className="h-full z-20" src={androidFrame.src} alt="" />
    </section>
  )
}

export default Android
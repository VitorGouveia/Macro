import { FC } from "react"

import iosFrame from "../../ios.png"

const ios: FC = () => {
  return (
    <section className="w-screen h-screen overflow-x-hidden overflow-y-hidden flex items-center justify-center bg-gray-900">
      <iframe
        style={{
          zIndex: 1,
          width: `${343}px`,
          height: `95vh`,
          position: "absolute",
          top: "50%",
          left: "49%",
          borderRadius: "53px",
          transform: "translate(-50%, -50%)"
        }}
        src={"https://esquemaflorescer.github.io/neo-expensive/packages/web/"}
        frameBorder="0" />
      <img style={{ pointerEvents: "none" }}  className="h-full z-20" src={iosFrame.src} alt="" />
    </section>
  )
}

export default ios
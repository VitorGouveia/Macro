import { FC } from "react"
import { useRouter } from "next/router"

const Android: FC = () => {
  const { query } = useRouter()

  const { pid } = query

  return (
    <section>
      {pid}
      {/* <iframe className="w-full h-full" src={url} frameBorder="0" /> */}
    </section>
  )
}

export default Android
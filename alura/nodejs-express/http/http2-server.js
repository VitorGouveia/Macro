// 1. Generate the certificates
// openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt

import fs from "node:fs"

import spdy from "spdy"
import express from "express"

const app = express()

app.use(express.static("public"))

const server = spdy.createServer(
  {
    key: fs.readFileSync("./server.key"),
    cert: fs.readFileSync("./server.crt")
  },
  app
)

server.listen(3002, (err) => {
  if(err) {
    throw new Error(err)
  }

  console.log("Listening on https://localhost:3002")
})
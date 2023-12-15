import express from "express";

import * as routes from "./routes.js";

const PORT = process.env.PORT;

const app = express();

let server = null;

function notFoundHandler(_, response) {
  return response.status(404).json({
    error: "404 Not found",
  });
}

export const start = async () => {
  app.use(express.json());

  app.use("/v1", routes.router);

  app.use(notFoundHandler);

  server = app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
};

export const stop = () => {
  if (server) {
    server.close();
  }

  process.exit(0);
};

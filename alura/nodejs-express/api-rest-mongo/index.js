import "dotenv/config.js";

import * as server from "./lib/application/http/server.js";
import * as mongo from "./lib/infra/db/mongo.js";

const shutdown = async () => {
  console.log("Starting graceful shutdown");
  await mongo.stop();
  server.stop();
};

process
  .on("SIGTERM", shutdown)
  .on("SIGINT", shutdown)
  .on("uncaughtException", (error) => {
    console.log("uncaughtException");
    console.log("Name: ", error.name);
    console.log(error.message);
    throw error;
  })
  .on("unhandledRejection", (error) => {
    console.log("unhandledRejection");
    console.log("Name: ", error.name);
    console.log(error.message);
    throw error;
  })
  .on("exit", (code) => {
    console.log(`exiting with code ${code}`);
  });

try {
  await mongo.start();
  await server.start();
  console.log("APP Started successfully!");
} catch (error) {
  console.log("APP Initialization failed!", error.name);
  throw error;
}

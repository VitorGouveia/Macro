import { MongoClient } from "mongodb";

const url = process.env.MONGO_URI;

export const client = new MongoClient(url);

export const start = async () => {
  await client.connect();
  console.log("MongoDB Start sucessfully");
};

export const stop = async () => {
  await client.close();
};

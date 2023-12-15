import { ObjectId } from "mongodb";
import { client } from "./db/mongo.js";

const books = [
  { id: "1", title: "Iniciando no Javascript" },
  { id: "2", title: "Construindo APIs Rest" },
  { id: "3", title: "Criando seu SaaS" },
  { id: "4", title: "Testando sua API" },
  { id: "5", title: "Colocando em Produção" },
  { id: "6", title: "Monitoramento & OPS" },
];

const dbName = "alura-books";

const db = client.db(dbName);

const transformId = ({ _id, ...rest }) => {
  return {
    id: _id,
    ...rest,
  };
};

export const repository = {
  create: async (collection, document) => {
    const doc = await db.collection(collection).insertOne(document);

    return doc.insertedId.toString();
  },
  list: async (collection, { query, pagination }) => {
    const doc = await db
      .collection(collection)
      .find(query)
      .skip((pagination.page - 1) * pagination.size)
      .limit(pagination.size)
      .toArray();

    return doc.map(transformId);
  },
  retrieve: async (collection, id) => {
    const doc = await db.collection(collection).findOne({
      _id: new ObjectId(id),
    });

    if (!doc) {
      return null;
    }

    return transformId(doc);
  },
  update: async (collection, id, update) => {
    await db.collection(collection).updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: update,
      }
    );
  },
  delete: async (collection, id) => {
    await db.collection(collection).deleteOne({
      _id: new ObjectId(id),
    });
  },
};

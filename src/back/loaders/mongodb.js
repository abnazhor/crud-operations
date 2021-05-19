import mongodb from "mongodb";

const { MongoClient } = mongodb;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url, {useUnifiedTopology: true});

export default async () => {
    await client.connect();

    global.client = client;
}
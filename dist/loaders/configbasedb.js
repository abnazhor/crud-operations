import fs from "fs";

import csvParser from "../utils/csvParser.js";

export default async () => {
    const db = client.db("consumptions")

    try {
        await db.collection("consumptions").drop();
    } catch (err) {

    }

    db.createCollection("consumptions");

    const dir = fs.readdirSync("./data");

    for (const file of dir) {
        const convertedCsv = csvParser(`./data/${file}`);
        for(const row of convertedCsv.rows) {
            db.collection("consumptions").insertOne({
                date: row[1],
                hour: row[2],
                consumption: row[3],
                price: row[4],
                costPerHour: row[5]
            });
        }
    }
}
import fs from "fs";

import csvParser from "../utils/csvParser.js";

export default async () => {
    // Generates a new collection inside our database Consumptions
    const db = client.db("consumptions")

    try {
        // As we want to create a new collection from scratch, we must delete all the existent data.
        await db.collection("consumptions").drop();
    } catch (err) {

    }

    db.createCollection("consumptions");

    const dir = fs.readdirSync("./data");

    // Data is taken from files and then processed to generate every row needed.
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
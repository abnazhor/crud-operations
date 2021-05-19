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

        db.collection("consumptions").insertOne({
            headers: convertedCsv.headers,
            rows: convertedCsv.rows.map(el => {
                return {
                    uuid: el[0],
                    date: el[1],
                    hour: el[2],
                    consumption: el[3],
                    price: el[4],
                    costPerHour: el[5]
                }
            })
        });
    }
}
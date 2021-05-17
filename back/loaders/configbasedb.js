import fs from "fs";

import csvParser from "../utils/csvParser.js";

export default async () => {
    await mongoose.connection.db.dropCollection("consumptions");

    const ConsumptionHistory = mongoose.model("Consumption", { headers: Array, rows: Array });

    const dir = fs.readdirSync("./data");

    for (const file of dir) {
        const convertedCsv = csvParser(`./data/${file}`);

        const consumption = new ConsumptionHistory({
            headers: convertedCsv.headers,
            rows: convertedCsv.rows
        });
        await consumption.save();
    }
}
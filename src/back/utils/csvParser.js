import fs from "fs";
import { v4 as uuidv4 } from "uuid";

export default (route) => {
    let result = {
        headers: [

        ],
        rows: [

        ]
    };

    const fileData = fs.readFileSync(route).toString();
    const splittedLines = fileData.replace(/\r/g, "").split("\n");
    const rows = splittedLines.splice(1, splittedLines.length);

    result.headers = splittedLines[0].split(",");

    for (const row of rows) {
        let columns = row.split(",");
        columns = [uuidv4(), columns].flat();
        result.rows.push(columns);
    }

    return result;
}
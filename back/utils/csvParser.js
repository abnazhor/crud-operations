import fs from "fs";

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

    result.headers = splittedLines[0];
    
    for(const row of rows) {
        const columns = row.split(",");
        result.rows.push(columns);
    }

    return result;
}
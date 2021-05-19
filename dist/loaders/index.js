import expressLoader from "./express.js";
import mongodbLoader from "./mongodb.js";
import configBaseDb from "./configbasedb.js";

export default async ({ expressApp }) => {
    const mongoConnection = await mongodbLoader();
    console.log("DB loaded and connected.");

    await configBaseDb();
    console.log("Cleaned up data. A new set based on CSV files has been generated.");

    await expressLoader({ app: expressApp });
    console.log("Express loaded");
}
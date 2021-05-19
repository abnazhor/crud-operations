import config from "./config/index.js";
import loaders from "./loaders/index.js";

import express from "express";

const startServer = async () => {
    const app = express();

    await loaders({ expressApp: app });

    app.listen(config.port, () => {
        console.log(`Server listening on port: ${config.port}`);
    });
}

startServer();
import cors from "cors";
import express from "express";

import routes from "../api/index.js";
import config from "../config/index.js";

export default async ({ app }) => {
    const appPath = "./app";

    app.use(express.static(appPath));

    app.use(cors(
        {
            origin: "*"
        }
    ));

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    app.use(config.api.prefix, routes());

    app.get("/", (req, res) => {
        res.sendFile(`${path}index.html`)
    })
}
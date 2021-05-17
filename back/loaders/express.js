import cors from "cors";
import express from "express";

import routes from "../api/index.js";
import config from "../config/index.js";

export default async ({ app }) => {
    app.use(cors(
        {
            origin: "*"
        }
    ));

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use(config.api.prefix, routes());
}
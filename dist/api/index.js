import { Router } from "express";
import consumption from "./routes/consumption.js";

export default () => {
    const app = Router();

    consumption(app);

    return app;
}
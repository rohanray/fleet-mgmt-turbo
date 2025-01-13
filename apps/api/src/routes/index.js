/* eslint-disable ts/no-redeclare */
import createRouter from "@fleet-app/api/lib/create-router";
import { BASE_PATH } from "../lib/constants";
import index from "./index.route";
import drivers from "@fleet-app/api/routes/drivers/drivers.index";
export function registerRoutes(app) {
    return app
        .route("/", index)
        .route("/", drivers);
}
// stand alone router type used for api client
export const router = registerRoutes(createRouter().basePath(BASE_PATH));

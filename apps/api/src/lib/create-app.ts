import { authHandler } from "@hono/auth-js";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";
import { pinoLogger } from "@fleet-app/api/middlewares/pino-logger";

import type { AppOpenAPI } from "./types";

import { BASE_PATH } from "./constants";
import createAuthConfig from "./create-auth-config";
import createRouter from "./create-router";

export default function createApp() {
    const app = createRouter();
    // .use("*", (c, next) => {
    //     if (c.req.path.startsWith(BASE_PATH)) {
    //         return next();
    //     }
    //     // SPA redirect to /index.html
    //     const requestUrl = new URL(c.req.raw.url);
    //     return c.env.ASSETS.fetch(new URL("/index.html", requestUrl.origin));
    // })
    // .basePath(BASE_PATH) as AppOpenAPI

    app.use(serveEmojiFavicon("📝"))
        .use(pinoLogger())
        // .use(
        //     "*",
        //     async (c, next) => {
        //         c.set("authConfig", createAuthConfig(c.env));
        //         return next();
        //     },
        // )
        // .use("/auth/*", authHandler())
        .notFound(notFound)
        .onError(onError);

    return app;
}

export function createTestApp<R extends AppOpenAPI>(router: R) {
    return createApp().route("/", router);
}

import configureOpenAPI from "@fleet-app/api/lib/configure-open-api";
import createApp from "@fleet-app/api/lib/create-app";
import index from "@fleet-app/api/routes/index.route";
import drivers from "@fleet-app/api/routes/drivers/drivers.index";

const app = createApp();

configureOpenAPI(app);

const routes = [
    index,
    drivers,
] as const;

routes.forEach((route) => {
    app.route("/", route);
});

export type AppType = typeof routes[number];

export default app;

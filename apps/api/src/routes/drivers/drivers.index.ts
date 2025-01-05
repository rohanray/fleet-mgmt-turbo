import createRouter from "@fleet-app/api/lib/create-router";

import * as handlers from "./drivers.handlers";
import * as routes from "./drivers.routes";

const router = createRouter()
    .openapi(routes.list, handlers.list)
    .openapi(routes.create, handlers.create)
    .openapi(routes.getOne, handlers.getOne);
    // .openapi(routes.patch, handlers.patch)
    // .openapi(routes.remove, handlers.remove);

export default router;

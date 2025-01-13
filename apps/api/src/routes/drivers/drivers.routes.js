import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";
import { createErrorSchema, IdParamsSchema } from "stoker/openapi/schemas";
import { insertDriversSchema, selectDriversSchema } from "@fleet-app/api/db/schema";
import { notFoundSchema } from "@fleet-app/api/lib/constants";
const tags = ['Drivers'];
export const list = createRoute({
    path: "/drivers",
    method: "get",
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(z.array(selectDriversSchema), "List of drivers"),
    },
});
export const create = createRoute({
    path: "/drivers",
    method: "post",
    request: {
        body: jsonContentRequired(insertDriversSchema, "Driver to create"),
    },
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(selectDriversSchema, "Created driver"),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(createErrorSchema(insertDriversSchema), "Invalid driver"),
    },
});
export const getOne = createRoute({
    path: "/drivers/{id}",
    method: "get",
    request: {
        params: IdParamsSchema,
    },
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(selectDriversSchema, "Driver found"),
        [HttpStatusCodes.NOT_FOUND]: jsonContent(notFoundSchema, "Driver not found"),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(createErrorSchema(IdParamsSchema), "Invalid ID"),
    },
});

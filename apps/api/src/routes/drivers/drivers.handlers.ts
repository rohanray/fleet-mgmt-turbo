import { eq } from "drizzle-orm";
import * as HttpStatusCodes from "stoker/http-status-codes";
import * as HttpStatusPhrases from "stoker/http-status-phrases";

import type { AppRouteHandler } from "@fleet-app/api/lib/types";

import db from "@fleet-app/api/db";
import { drivers } from "@fleet-app/api/db/schema";
import { ZOD_ERROR_CODES, ZOD_ERROR_MESSAGES } from "@fleet-app/api/lib/constants";

import type { CreateRoute, GetOneRoute, ListRoute } from "./drivers.routes";
import { pinoLogger } from "@fleet-app/api/middlewares/pino-logger";

export const list: AppRouteHandler<ListRoute> = async (c) => {
    const drivers = await db.query.drivers.findMany({
        orderBy(fields, operators) {
            return operators.desc(fields.createdAt);
        },
    });
    console.warn(drivers);
    return c.json(drivers);
};

export const create: AppRouteHandler<CreateRoute> = async (c) => {
    console.warn(c.var.logger.info(c.req, "drivers post body"));
    const driver = c.req.valid("json");

    const [inserted] = await db.insert(drivers).values(driver).returning();
    return c.json(inserted, HttpStatusCodes.OK);
};

export const getOne: AppRouteHandler<GetOneRoute> = async (c) => {
    const { id } = c.req.valid("param");
    const task = await db.query.drivers.findFirst({
        where(fields, operators) {
            return operators.eq(fields.id, id);
        },
    });

    if (!task) {
        return c.json(
            {
                message: HttpStatusPhrases.NOT_FOUND,
            },
            HttpStatusCodes.NOT_FOUND,
        );
    }

    return c.json(task, HttpStatusCodes.OK);
};

// export const patch: AppRouteHandler<PatchRoute> = async (c) => {
//     const { id } = c.req.valid("param");
//     const updates = c.req.valid("json");

//     if (Object.keys(updates).length === 0) {
//         return c.json(
//             {
//                 success: false,
//                 error: {
//                     issues: [
//                         {
//                             code: ZOD_ERROR_CODES.INVALID_UPDATES,
//                             path: [],
//                             message: ZOD_ERROR_MESSAGES.NO_UPDATES,
//                         },
//                     ],
//                     name: "ZodError",
//                 },
//             },
//             HttpStatusCodes.UNPROCESSABLE_ENTITY,
//         );
//     }

//     const [task] = await db.update(drivers)
//         .set(updates)
//         .where(eq(drivers.id, id))
//         .returning();

//     if (!task) {
//         return c.json(
//             {
//                 message: HttpStatusPhrases.NOT_FOUND,
//             },
//             HttpStatusCodes.NOT_FOUND,
//         );
//     }

//     return c.json(task, HttpStatusCodes.OK);
// };

// export const remove: AppRouteHandler<RemoveRoute> = async (c) => {
//     const { id } = c.req.valid("param");
//     const result: D1Response = await db.delete(drivers)
//         .where(eq(drivers.id, id));

//     if (result.meta.changes === 0) {
//         return c.json(
//             {
//                 message: HttpStatusPhrases.NOT_FOUND,
//             },
//             HttpStatusCodes.NOT_FOUND,
//         );
//     }

//     return c.body(null, HttpStatusCodes.NO_CONTENT);
// };

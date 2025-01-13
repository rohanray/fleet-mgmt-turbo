import { pinoLogger as logger } from "hono-pino";
import pino from "pino";
import pretty from "pino-pretty";
import Bun from "bun";
export function pinoLogger() {
    return logger({
        pino: pino({
            level: Bun.env.LOG_LEVEL || "info",
        }, Bun.env.NODE_ENV === "production" ? undefined : pretty()),
        http: {
            reqId: () => crypto.randomUUID(),
        },
    });
}

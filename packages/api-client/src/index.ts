import type { router } from "@fleet-app/api/routes";

import { hc } from "hono/client";

// create instance to inline type in build
// https://hono.dev/docs/guides/rpc#compile-your-code-before-using-it-recommended
// eslint-disable-next-line unused-imports/no-unused-vars
const client = hc<router>("");
export type Client = typeof client;

export default (...args: Parameters<typeof hc>): Client =>
    hc<router>(...args);

export type ErrorSchema = {
    error: {
        issues: {
            code: string;
            path: (string | number)[];
            message?: string | undefined;
        }[];
        name: string;
    };
    success: boolean;
};

declare const router: import("@hono/zod-openapi").OpenAPIHono<import("../lib/types").AppBindings, {
    "/": {
        $get: {
            input: {};
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/">;
export default router;
//# sourceMappingURL=index.route.d.ts.map
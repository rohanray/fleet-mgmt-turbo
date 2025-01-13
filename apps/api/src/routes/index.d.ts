import type { AppOpenAPI } from "../lib/types";
export declare function registerRoutes(app: AppOpenAPI): import("@hono/zod-openapi").OpenAPIHono<import("../lib/types").AppBindings, import("hono/types").MergeSchemaPath<{
    "/drivers": {
        $get: {
            input: {};
            output: {
                id: number;
                fname: string;
                lname: string;
                email: string;
                image: string | null;
                mobile: number;
                license: string;
                license_expiration: string;
                mileage: number;
                createdAt: string | null;
                updatedAt: string | null;
            }[];
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/drivers": {
        $post: {
            input: {
                json: {
                    fname: string;
                    lname: string;
                    email: string;
                    mobile: number;
                    license: string;
                    license_expiration: Date;
                    mileage: number;
                    image?: string | null | undefined;
                };
            };
            output: {
                id: number;
                fname: string;
                lname: string;
                email: string;
                image: string | null;
                mobile: number;
                license: string;
                license_expiration: string;
                mileage: number;
                createdAt: string | null;
                updatedAt: string | null;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {
                json: {
                    fname: string;
                    lname: string;
                    email: string;
                    mobile: number;
                    license: string;
                    license_expiration: Date;
                    mileage: number;
                    image?: string | null | undefined;
                };
            };
            output: {
                error: {
                    issues: {
                        code: string;
                        path: (string | number)[];
                        message?: string | undefined | undefined;
                    }[];
                    name: string;
                };
                success: boolean;
            };
            outputFormat: "json";
            status: 422;
        };
    };
} & {
    "/drivers/:id": {
        $get: {
            input: {
                param: {
                    id: number;
                };
            };
            output: {
                id: number;
                fname: string;
                lname: string;
                email: string;
                image: string | null;
                mobile: number;
                license: string;
                license_expiration: string;
                mileage: number;
                createdAt: string | null;
                updatedAt: string | null;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {
                param: {
                    id: number;
                };
            };
            output: {
                error: {
                    issues: {
                        code: string;
                        path: (string | number)[];
                        message?: string | undefined | undefined;
                    }[];
                    name: string;
                };
                success: boolean;
            };
            outputFormat: "json";
            status: 422;
        } | {
            input: {
                param: {
                    id: number;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 404;
        };
    };
}, "/"> & import("hono/types").MergeSchemaPath<{
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
}, "/">, "/">;
export declare const router: import("@hono/zod-openapi").OpenAPIHono<import("../lib/types").AppBindings, import("hono/types").MergeSchemaPath<{
    "/drivers": {
        $get: {
            input: {};
            output: {
                id: number;
                fname: string;
                lname: string;
                email: string;
                image: string | null;
                mobile: number;
                license: string;
                license_expiration: string;
                mileage: number;
                createdAt: string | null;
                updatedAt: string | null;
            }[];
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/drivers": {
        $post: {
            input: {
                json: {
                    fname: string;
                    lname: string;
                    email: string;
                    mobile: number;
                    license: string;
                    license_expiration: Date;
                    mileage: number;
                    image?: string | null | undefined;
                };
            };
            output: {
                id: number;
                fname: string;
                lname: string;
                email: string;
                image: string | null;
                mobile: number;
                license: string;
                license_expiration: string;
                mileage: number;
                createdAt: string | null;
                updatedAt: string | null;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {
                json: {
                    fname: string;
                    lname: string;
                    email: string;
                    mobile: number;
                    license: string;
                    license_expiration: Date;
                    mileage: number;
                    image?: string | null | undefined;
                };
            };
            output: {
                error: {
                    issues: {
                        code: string;
                        path: (string | number)[];
                        message?: string | undefined | undefined;
                    }[];
                    name: string;
                };
                success: boolean;
            };
            outputFormat: "json";
            status: 422;
        };
    };
} & {
    "/drivers/:id": {
        $get: {
            input: {
                param: {
                    id: number;
                };
            };
            output: {
                id: number;
                fname: string;
                lname: string;
                email: string;
                image: string | null;
                mobile: number;
                license: string;
                license_expiration: string;
                mileage: number;
                createdAt: string | null;
                updatedAt: string | null;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {
                param: {
                    id: number;
                };
            };
            output: {
                error: {
                    issues: {
                        code: string;
                        path: (string | number)[];
                        message?: string | undefined | undefined;
                    }[];
                    name: string;
                };
                success: boolean;
            };
            outputFormat: "json";
            status: 422;
        } | {
            input: {
                param: {
                    id: number;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 404;
        };
    };
}, "/"> & import("hono/types").MergeSchemaPath<{
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
}, "/">, "/">;
export type router = typeof router;
//# sourceMappingURL=index.d.ts.map
import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from 'path';

// console.log("dirname: ", __dirname);

export default {
    migrations: {
        path: path.join(__dirname, "./migrations"), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    },
    entities: [Post],
    dbName: "lireddit", 
    type: "postgresql",
    //When you're not in production, we want debug to be on
    //code is found in constants.ts
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
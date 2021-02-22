import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

// asynchronous function 
const main = async () => {
    const orm = await MikroORM.init({
        //corresponds to all our database tables
        entities: [Post],
        dbName; "lireddit", 
        type: "postgresql",
        //When you're not in production, we want debug to be on
        //code is found in constants.ts
        debug: !__prod__,
    });

    const post = orm.em.create(Post, {title: 'my first post'});
    await orm.em.persistAndFlush(post);
};

main();
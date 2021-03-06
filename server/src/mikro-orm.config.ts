import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import  path  from 'path';

export default {
    entities:[Post],
    migrations: {
        path: path.join(__dirname,"./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
        dbName:'TicketBug1',
        type:'postgresql',
        user: 'postgres',
        password: 'Benjamin3909',
        debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];
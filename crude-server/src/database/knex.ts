import knex from "knex";
import config from "./knexfile";

const db = knex(config.development); // Sử dụng cấu hình development

export default db;

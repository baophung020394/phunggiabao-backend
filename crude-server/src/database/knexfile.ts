import { Knex } from "knex";
import path from "path";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3", // Sử dụng SQLite
    connection: {
      filename: path.resolve(__dirname, "../../data.db"), 
    },
    useNullAsDefault: true, 
    migrations: {
      directory: path.resolve(__dirname, "../../migrations"),
      stub: path.resolve(__dirname, "../../migrations/resource.stub"),
    },
  },
};

export default config;

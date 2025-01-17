import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("resources", (table) => {
    table.increments("id").primary(); 
    table.string("name").notNullable(); 
    table.text("description");
    table.timestamps(true, true); 
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("resources"); 
}

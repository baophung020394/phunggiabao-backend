import db from "../database/knex";

export interface Resource {
  id?: number;
  name: string;
  description: string;
}

export const getAllResources = async (
  filter?: string,
  sortBy: string = "id",
  sortOrder: "asc" | "desc" = "asc",
  page: number = 1,
  pageSize: number = 10
) => {
  const offset = (page - 1) * pageSize;

  return db("resources")
    .where("name", "like", `%${filter || ""}%`)
    .orderBy(sortBy, sortOrder)
    .limit(pageSize)
    .offset(offset);
};

export const getResourceById = async (id: number) => {
  return db("resources").where({ id }).first();
};

export const createResource = async (resource: Resource) => {
  return db("resources").insert(resource);
};

export const updateResource = async (id: number, resource: Resource) => {
  return db("resources").where({ id }).update(resource);
};

export const deleteResource = async (id: number) => {
  return db("resources").where({ id }).del();
};

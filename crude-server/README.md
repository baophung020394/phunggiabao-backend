# Crude Server

## Setup

1. `cd crude-server`
2. `npm install`
3. `npm run dev`

## Create file migration

1. `npm run migrate:make`
2. `npm run migrate:rollback`
3. `npm run migrate:latest`

## API postman

### List all resources

- **GET** `/api/resources?filter=test&sortBy=name&sortOrder=asc&page=1&pageSize=10`

### Get a resource by ID

- **GET** `/api/resource/:id`

### Create a new resource

- **POST** `/api/resource`
  - Body:
    ```json
    {
      "name": "Resource Name",
      "description": "Resource Description"
    }
    ```

### Update a resource by ID

- **PUT** `/api/resource/:id`
  - Body:
    ```json
    {
      "name": "Updated Name",
      "description": "Updated Description"
    }
    ```

### Delete a resource by ID

- **DELETE** `/api/resource/:id`

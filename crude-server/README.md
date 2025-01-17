# Crude Server

## Setup

1. Jump into crude folder

```bash
cd crude-server
```

2. Install packages

```bash
cd npm install
```

3. Run source code

```bash
npm run dev
```

## Create file migration

1. Create file migration

```bash
npm run migrate:make
```

2. Rollback to reset database

```bash
npm run migrate:rollback
```

3. Run migration file

```bash
npm run migrate:latest
```

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

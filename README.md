# TodoList Web App
## CRUD app with schema Token Rotation ( access & refresh token ).
- Created for Devscale Assignment #3 (backend only)


# How to use
1. Clone this repo
2. Run: pnpm install
3. Create .env file
```
MONGO_URI_TODOLIST=mongodb://user:password@127.0.0.1:27017/test
PORT=
JWT_ACCESS_KEY=
JWT_REFRESH_KEY=
```
4. Run: pnpm dev


# Endpoints
- `POST /api/v1/user`
- `POST /api/v1/user/login`
- `POST /api/v1/user/logout`
- `GET /api/v1/todos`
- ```
  POST /api/v1/todos
  Content-type:application-json
  {
    "title": "Task1"
    "todos": "Doing something..."
  }
  ```
### All detail http script located at `api_test` folder

# TodoList Web App
## CRUD app with schema Token Rotation ( access & refresh token ).
- Created for Devscale Assignment #3 (backend only)
<br />

# How to use
1. Clone this repo
2. Run `pnpm install`
3. Create `.env` file
```
MONGO_URI_TODOLIST=mongodb://user:password@127.0.0.1:27017/test
PORT=
JWT_ACCESS_KEY=
JWT_REFRESH_KEY=
```
4. Run `pnpm dev`
<br />

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
- All detail http script located at `api_test` folder
<br />

# Basic logic
### # Unregistered user cannot access Todolist App
App will check the availability of accessToken & refreshToken on each user's cookie

### # Register logic
App will provide:
1. User input validation (name, email format, password with minimum 8 characters)
2. Collision check (filtered by unique email address)
3. Password hashing by `bcrypt`
4. If all clear, user data will be saved into DB

### # Login logic
App will provide:
1. User input validation (email format & password)
2. User record check (registered email)
3. Password maching by `bcrypt compare` (string input password vs password on db)
4. Producing new accessToken (short lived) and refreshToken (mid long lived)
5. RefreshToken will be saved into db
6. Set both tokens into browser's cookie

### # Logout logic
App will provide:
1. Check availability of both tokens
2. If exist, app will remove cookie for both tokens

### # Accessing TodoList
1. All TodoList route will facing to auth middleware, to check some of below points,
2. Check availability of both tokens (grant access)
3. Check validation of `AccessToken` lifetime
4. If expired, Check availability & validation of `RefreshToken` on both side DB and cookie
5. If exitst, app will regenerate new AccessToken & set to cookie again
6. Auth middleware will be passed through TodoList Routes

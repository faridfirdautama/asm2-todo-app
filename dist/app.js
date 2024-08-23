"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_connect_1 = require("./dB/db.connect");
const todo_route_1 = require("./routes/todo.route");
const user_route_1 = require("./routes/user.route");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
(0, db_connect_1.connectDB)();
// Routes
app.use("/api/v1/todos", todo_route_1.todoRouter);
app.use("/api/v1/user", user_route_1.userRouter);
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});

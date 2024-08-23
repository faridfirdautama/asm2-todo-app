"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const mongoose_1 = require("mongoose");
const authSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "TodoUser" },
    refreshToken: String,
});
exports.Auth = (0, mongoose_1.model)("Auth", authSchema);

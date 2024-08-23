"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("../model/user.schema");
const auth_schema_1 = require("../model/auth.schema");
const UserRepository = {
    getUser: (email) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield user_schema_1.TodoUser.findOne({ email });
            return user;
        }
        catch (error) {
            console.log(`Repository error: ${error}`);
        }
    }),
    createUser: (user) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newUser = new user_schema_1.TodoUser(user);
            yield newUser.save();
        }
        catch (error) {
            console.log(`Repository error: ${error}`);
        }
    }),
    createAuth: (auth) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newAuth = new auth_schema_1.Auth(auth);
            yield newAuth.save();
        }
        catch (error) {
            console.log(`Repository error: ${error}`);
        }
    }),
    getAuth: (refreshToken) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const auth = yield auth_schema_1.Auth.findOne({ refreshToken });
            return auth;
        }
        catch (error) {
            console.log(`Repository error: ${error}`);
        }
    }),
    deleteAuth: (refreshToken) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield auth_schema_1.Auth.deleteOne({ refreshToken });
        }
        catch (error) {
            console.log(`Repository error: ${error}`);
        }
    }),
};
exports.default = UserRepository;

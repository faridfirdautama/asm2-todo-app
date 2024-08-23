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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = __importDefault(require("../repositories/user.repository"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const UserService = {
    getUser: (email) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield user_repository_1.default.getUser(email);
            return user;
        }
        catch (error) {
            console.log(`Service error: ${error}`);
        }
    }),
    createUser: (user) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newUser = yield user_repository_1.default.createUser(user);
            return newUser;
        }
        catch (error) {
            console.log(`Service error: ${error}`);
        }
    }),
    createAuth: (auth) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newAuth = yield user_repository_1.default.createAuth(auth);
            return newAuth;
        }
        catch (error) {
            console.log(`Service error: ${error}`);
        }
    }),
    getAuth: (refreshToken) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const auth = yield user_repository_1.default.getAuth(refreshToken);
            return auth;
        }
        catch (error) {
            console.log(`Service error: ${error}`);
        }
    }),
    userRegister: (user) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // validation
            if (!user.email || !user.password) {
                return "Email and password are required";
            }
            if (user.password.length < 8) {
                return "Password should minimum > 8 characters";
            }
            // collision
            const emailExist = yield UserService.getUser(user.email);
            if (emailExist) {
                return "Email already exist";
            }
            // password hashing
            user.password = yield bcrypt_1.default.hash(user.password, 13);
            // return response
            const newUser = yield UserService.createUser(user);
            return newUser;
        }
        catch (error) {
            console.log(`Service error: ${error}`);
        }
    }),
    userLogin: (user) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // validation
            if (!user.email || !user.password) {
                return "Email and password are required";
            }
            if (user.password.length < 8) {
                return "Password should minimum > 8 characters";
            }
            // record check
            const getUser = yield UserService.getUser(user.email);
            if (!getUser) {
                return "System will sent reset email link to your associated email, if the email found registered";
            }
            // password matching
            const isMatch = yield bcrypt_1.default.compare(user.password, getUser.password);
            if (!isMatch) {
                return "Invalid credentials";
            }
            // create accessToken & refreshToken
            const payload = {
                id: getUser._id,
                name: getUser.name,
                email: getUser.email,
            };
            const accessToken = jsonwebtoken_1.default.sign(payload, process.env.JWT_ACCESS_KEY, {
                expiresIn: "15m",
            });
            const refreshToken = jsonwebtoken_1.default.sign(payload, process.env.JWT_REFRESH_KEY, {
                expiresIn: "7d",
            });
            // save refreshToken to DB
            const userId = getUser._id.toString();
            yield UserService.createAuth({ userId, refreshToken });
            const result = { accessToken, refreshToken };
            return result;
        }
        catch (error) {
            console.log(`Service error: ${error}`);
        }
    }),
    userLogout: (refreshToken) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield UserService.getAuth(refreshToken);
        }
        catch (error) {
            console.log(`Service error: ${error}`);
        }
    }),
};
exports.default = UserService;

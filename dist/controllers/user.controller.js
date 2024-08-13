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
const user_service_1 = __importDefault(require("../services/user.service"));
const UserController = {
    handleRegister: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, email, password } = req.body;
        const messages = yield user_service_1.default.userRegister({ name, email, password });
        if (typeof messages === "string") {
            return res.status(400).json({ messages });
        }
        return res
            .status(201)
            .json({ message: "User successfully created", data: { name, email } });
    }),
    handleLogin: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { email, password } = req.body;
        const messages = yield user_service_1.default.userLogin({
            email,
            password,
        });
        if (typeof messages === "string") {
            return res.status(400).json({ messages });
        }
        return res
            .cookie("accessToken", messages === null || messages === void 0 ? void 0 : messages.accessToken, {
            httpOnly: true,
        })
            .cookie("refreshToken", messages === null || messages === void 0 ? void 0 : messages.refreshToken, {
            httpOnly: true,
        })
            .status(200)
            .json({ message: "You are successfully logged in" });
    }),
    handleLogout: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { refreshToken } = req.cookies;
        yield user_service_1.default.userLogout(refreshToken);
        return res
            .clearCookie("accessToken")
            .clearCookie("refreshToken")
            .status(200)
            .json({ message: "Logout successfully" });
    }),
};
exports.default = UserController;

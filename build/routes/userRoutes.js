"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controllers/userController");
exports.userRoutes = (app) => app.route("/users").get(userController_1.getUsers);

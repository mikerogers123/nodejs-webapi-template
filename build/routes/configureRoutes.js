"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRoutes_1 = require("./userRoutes");
const allRoutes = [
    userRoutes_1.userRoutes
];
exports.configureRoutes = (app) => allRoutes.forEach(routeConfig => routeConfig(app));

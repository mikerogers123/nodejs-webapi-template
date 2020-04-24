import { RouteConfiguration } from "./routeConfiguration";
import { userRoutes } from "./userRoutes";
import { Express } from "express";

const allRoutes: ReadonlyArray<RouteConfiguration> = [
    userRoutes
];

export const configureRoutes = (app: Express) => allRoutes.forEach(routeConfig => routeConfig(app));
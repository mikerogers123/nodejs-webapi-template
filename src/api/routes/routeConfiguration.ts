import { Express, IRoute } from "express";

export type RouteConfiguration = (app: Express) => IRoute;
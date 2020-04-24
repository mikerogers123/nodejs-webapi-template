import { getUsers } from "../controllers/userController";
import { Express } from "express";

export const userRoutes = (app: Express) =>
  app.route("/users").get(getUsers);

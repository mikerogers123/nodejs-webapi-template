import { Request, Response } from 'express';
import { User } from '../models/userModel';

export const getUsers = (req: Request, res: Response) => {
  res.json(users);
};

const users: ReadonlyArray<User> = [{name: "Bob Teapot"}];

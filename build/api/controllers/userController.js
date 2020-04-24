"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = (req, res) => {
    res.json(users);
};
const users = [{ name: "Bob Teapot" }];

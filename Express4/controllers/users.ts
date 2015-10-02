/*
 * GET /users
 */
import express = require("express");

// GET /users
export function index(req: express.Request, res: express.Response) {
    res.send("respond with a resource");
};
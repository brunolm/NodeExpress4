/*
 * GET /user
 */
import express = require("express");
import mongoose = require("mongoose");
import db = require("../models/Database");
import vm = require("../viewmodels/home/IndexViewModel");

import BaseController = require("./BaseController");

class UserController extends BaseController {

    // GET /user
    Index(req: express.Request, res: express.Response) {
        res.render("user/index", {});
    }

    Register(app: express.Application) {
        app.use("/", this.Index);
    }
}

export = new UserController();
/*
 * GET /
 */
import express = require("express");
import mongoose = require("mongoose");
import db = require("../models/Database");
import vm = require("../viewmodels/home/IndexViewModel");

import BaseController = require("./BaseController");

class HomeController extends BaseController {

    // GET /
    Index(req: express.Request, res: express.Response) {
        res.render("home/index", new vm.IndexViewModel());
    }

    Register(app: express.Application) {
        app.use("/", this.Index);
    }
}

export = new HomeController();
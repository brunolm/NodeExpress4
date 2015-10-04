/*
 * GET /user
 */
import express = require("express");
import mongoose = require("mongoose");
import db = require("../models/Database");
import vm = require("../viewmodels/home/IndexViewModel");

import baseController = require("./BaseController");

class UserController extends baseController.BaseController {

    // GET /user
    static Index(req: express.Request, res: express.Response) {
        super.run(req, res);

        res.render("user/index", {});
    }
}

export = UserController;
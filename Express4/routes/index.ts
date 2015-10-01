/*
 * GET /
 */
import express = require("express");
import mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/NodeExpress4');
mongoose.model("Test", new mongoose.Schema({ ID: Number, Name: String }));

// GET /
export function index(req: express.Request, res: express.Response) {

    var Test = mongoose.model("Test");
    var item = new Test({ ID: 1, Name: "Bruno M" });
    item.save(err => { });

    Test.find({}, (err, tests) => {
        console.log(tests);
    });

    res.render("index", { title: "Express" });
};
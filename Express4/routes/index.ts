/*
 * GET /
 */
import express = require("express");

export function index(req: express.Request, res: express.Response) {
    res.render("index", { title: "Express" });
};


/*
var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
*/
var express = require("express");
var handlebars = require("express-handlebars");

var mongoose = require("mongoose");

var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

var homeController = require("./controllers/HomeController");
var userController = require("./controllers/UserController");

var app = express();

// view engine setup
app.engine("hbs", handlebars({ extname: "hbs", defaultLayout: "layout" }));
app.set("view engine", "hbs");

// database
mongoose.connect("mongodb://localhost/NodeExpress4");

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + "/public/favicon.ico"));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeController.Index);
app.use("/user", userController.Index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render("error", {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
        message: err.message,
        error: {}
    });
});


module.exports = app;

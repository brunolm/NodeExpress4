import express = require("express");

abstract class BaseController {
    abstract Register(app: express.Application);
}

export = BaseController;
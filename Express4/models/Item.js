var mongoose = require("mongoose");
var db = require("./Database");
mongoose.model(db.Schema.Item, new mongoose.Schema({
    Name: String,
    Description: String,
}));
//# sourceMappingURL=Item.js.map
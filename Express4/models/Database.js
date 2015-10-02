var mongoose = require("mongoose");
function Connect() {
    mongoose.connect("mongodb://localhost/NodeExpress4");
}
exports.Connect = Connect;
var Schema;
(function (Schema) {
    //#region Item
    Schema.Item = "Item";
})(Schema = exports.Schema || (exports.Schema = {}));
mongoose.model(Schema.Item, new mongoose.Schema({
    Name: String,
    Description: String,
}));
//# sourceMappingURL=Database.js.map
var mongoose = require("mongoose");
var db = require("../models/Database");
var vm = require("../viewmodels/home/IndexViewModel");
// GET /
function index(req, res) {
    db.Connect();
    var ItemContainer = mongoose.model(db.Schema.Item);
    var item = new ItemContainer({
        Name: "Bruno M",
        Description: "God like programmer",
    });
    item.save(function (err) { console.log(err); });
    ItemContainer.find({}, function (err, items) {
        console.log(items);
    });
    var viewModel = new vm.IndexViewModel();
    res.render("index", viewModel);
}
exports.index = index;
;
//# sourceMappingURL=home.js.map
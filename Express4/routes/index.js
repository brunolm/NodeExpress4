var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/NodeExpress4');
mongoose.model("Test", new mongoose.Schema({ ID: Number, Name: String }));
// GET /
function index(req, res) {
    var Test = mongoose.model("Test");
    var item = new Test({ ID: 1, Name: "Bruno M" });
    item.save(function (err) { });
    Test.find({}, function (err, tests) {
        console.log(tests);
    });
    res.render("index", { title: "Express" });
}
exports.index = index;
;
//# sourceMappingURL=index.js.map
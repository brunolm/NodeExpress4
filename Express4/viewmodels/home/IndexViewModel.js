var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base = require("../BaseViewModel");
var IndexViewModel = (function (_super) {
    __extends(IndexViewModel, _super);
    function IndexViewModel() {
        _super.call(this);
        this.title = "Home";
    }
    return IndexViewModel;
})(base.BaseViewModel);
exports.IndexViewModel = IndexViewModel;
//# sourceMappingURL=IndexViewModel.js.map
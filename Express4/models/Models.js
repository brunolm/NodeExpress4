var models = [
    "Item.js",
];
function InitializeComponent() {
    for (var i = 0; i < models.length; ++i) {
        require(models[i])();
    }
}
exports.InitializeComponent = InitializeComponent;
//# sourceMappingURL=Models.js.map
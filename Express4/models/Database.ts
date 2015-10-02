import mongoose = require("mongoose");

export function Connect() {
    mongoose.connect("mongodb://localhost/NodeExpress4");
}

export module Schema {
    //#region Item
    export const Item = "Item";

    export interface IItem extends mongoose.Document {
        Name: string;
        Description: string;
    }
    //#endregion
}

mongoose.model(Schema.Item,
    new mongoose.Schema({
        Name: String,
        Description: String,
    }));
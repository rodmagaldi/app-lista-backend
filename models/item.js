const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    comprado: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = mongoose.model("Item", itemSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listaSchema = new Schema({
    data: {
        type: Date,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    itens: [
        {
            type: Schema.Types.ObjectId,
            ref: "Itens"
        }
    ]
});

module.exports = mongoose.model("Lista", listaSchema);
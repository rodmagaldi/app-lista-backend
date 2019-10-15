const listaResolver = require("./lista");
const itemResolver = require("./item")

const rootResolver = {
    ...listaResolver,
    ...itemResolver
};

module.exports = rootResolver;
const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type Lista {
    _id: ID!
    data: String!
    nome: String!
    itens: [Item!]!
}

type Item {
    _id: ID!
    nome: String!
    comprado: Boolean!
}

input ItemInput {
    nome: String!
}

input ListaInput {
    data: String!
    nome: String!
}

input UpdateListaInput {
    listaId: ID!
    itensAdicionados: [ItemInput!]!
}

input CompraItemInput {
    itemId: ID!
}

type RootQuery {
    listas: [Lista!]!
}

type RootMutation {
    createLista(listaInput: ListaInput): Lista!
    updateLista(updateListaInput: UpdateListaInput): Lista!
    compraItem(compraItemInput: CompraItemInput): Item!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`)
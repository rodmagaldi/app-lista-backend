const Lista = require("../../models/lista");
const Item = require("../../models/item");

module.exports = {
    listas: async () => {
        try {
            const listas = await Lista.find();
            return listas;
        } catch (err) {
            throw err;
        }
    },
    createLista: async (args, req) => {
        const lista = new Lista({
            nome: args.listaInput.nome,
            data: new Date(args.listaInput.data),
            itens: args.listaInput.itens
        });
        try {
            await lista.save();
            return lista;
        } catch (err) {
            throw err;
        }
    },
    updateLista: async (args, req) => {
        const lista = await Lista.findOne({_id: args.updateListaInput.listaId});
        for (let item of args.updateListaInput.itensAdicionados) {
            const novoItem = new Item({
                nome: item.nome,
                comprado: false
            })
            await novoItem.save();
            lista._doc.itens.push(novoItem._id);
        };
        await lista.save();
        return lista;
    }
}
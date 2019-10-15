const Item = require("../../models/item");

module.exports = {
    compraItem: async (args, req) => {
        const item = await Item.findById(args.compraItemInput.itemId);
        console.log(item);
        
        item.comprado = !item.comprado;
        try {
            await item.save();
            return item;
        } catch (err) {
            throw(err)
        }
        
    }
}
// Importando dependências
const mongoose = require('mongoose');
const mogoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    url: {
        type: String,
        require: true,
    },
    creatAt: {
        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mogoosePaginate);

mongoose.model('Product', ProductSchema);
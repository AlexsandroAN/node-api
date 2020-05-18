// Importando dependências
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

// Exportando lógicas de negócio (requisições assíncronas) para routes.js
module.exports = {
    async index(req, res) {
        // Determinando parâmetro get (/products?page=x)
        const { page = 1 } = req.query;
        const product = await Product.paginate({}, { page, limit: 10 });
        // Retornando json
        return res.json(product);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    // req: contém todos os dados da requisição
    async store(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async update(req, res) {
        const product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        return res.json(product);
    },

    async destroy(req, res) {
        await Product.findOneAndDelete(req.params.id);
        return res.send();
    }
};
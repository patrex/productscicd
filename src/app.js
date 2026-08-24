const express = require('express');

const { getAllProducts, getProudctById, updateProduct, deleteProduct } = require('./products');

const app = express();

app.use(express.json());

app.get('/products', (req, res) => {
    res.status(200).json(getAllProducts());
});

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);

    const product = getProudctById(id);

    if (!product) {
        return res.status(404).send("Product not found");
    }

    res.json(product);
});

app.post('/products', (req, res) => {
    const { name, price } = req.body;

    if (!name || !price ) {
        return res.status(400).send("Bad request");
    }

    const product = createProduct(name, price);

    res.status(201).json(product);
});

app.put('products/:id', (req, res) => {
    const id = Number(req.params.id);
    const { name, price } = req.body;

    const product = updateProduct(id, name, price);

    if (!product) {
        return res.status(404).send("Product not found")
    }

    res.json(product);
});

app.delete("products/:id", (req, res) => {
    const id = Number(req.params.id);

    const deleted = deleteProduct(id);

    if (!deleted) {
        return res.status(404).send("product was not found")
    }

    res.status(204).send();
})

module.exports = app;

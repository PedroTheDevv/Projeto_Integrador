const db = require('../config/db');

// Middleware to check admin role
const isAdmin = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send('Access denied');
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).send('Invalid token');
        if (decoded.role !== 'admin') return res.status(403).send('Forbidden');
        req.user = decoded;
        next();
    });
};

const getProducts = (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) return res.status(500).send('Error fetching products');
        res.json(results);
    });
};

const addProduct = (req, res) => {
    const { name, description, price, stock, image_url } = req.body;
    db.query('INSERT INTO products (name, description, price, stock, image_url) VALUES (?, ?, ?, ?, ?)', [name, description, price, stock, image_url], (err, result) => {
        if (err) return res.status(500).send('Error adding product');
        res.status(201).send('Product added');
    });
};

const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, description, price, stock, image_url } = req.body;
    db.query('UPDATE products SET name = ?, description = ?, price = ?, stock = ?, image_url = ? WHERE id = ?', [name, description, price, stock, image_url, id], (err, result) => {
        if (err) return res.status(500).send('Error updating product');
        res.send('Product updated');
    });
};

const deleteProduct = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM products WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).send('Error deleting product');
        res.send('Product deleted');
    });
};

module.exports = { isAdmin, getProducts, addProduct, updateProduct, deleteProduct };

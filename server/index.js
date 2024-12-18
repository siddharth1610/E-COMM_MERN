// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Dotenv
require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());


// MongoDB connection

mongoose.connect(process.env.uri).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Mongoose Schema and Model
const productSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    rating: {
        rate: { type: Number, required: true },
        count: { type: Number, required: true }
    }
});


const Product = mongoose.model('Product', productSchema);

// Create Product
app.post('/products', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Search Product
app.get('/search', async (req, res) => {
    try {
        const keyword = req.query.keyword;
        let products = [];

        if (!keyword) {
            products = await Product.find();
        } else {
            products = await Product.find({
                title: { $regex: keyword, $options: 'i' }
            });
        }

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Read Product by ID
app.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update Product
app.put('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete Product
app.delete('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Fetch Filter Options
app.get('/filters', async (req, res) => {
    try {
        const categories = await Product.distinct('category');
        const colors = await Product.distinct('color');
        const sizes = await Product.distinct('size');
        res.status(200).json({ categories, colors, sizes });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/categories", async (req, res) => {
    try {
        const type = req.query.type;
        let products = [];
        if (type) {
            products = await Product.find({ category: type });
        } else {
            products = await Product.find();
        }

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

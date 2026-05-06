import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// Get all products or filter by category
router.get('/', async (req, res) => {
  try {
    const { category, subCategory } = req.query;
    let query = {};
    if (category) {
      // Case-insensitive regex match for category
      query.category = { $regex: new RegExp(`^${category}$`, 'i') };
    }
    if (subCategory) {
      query.subCategory = { $regex: new RegExp(`^${subCategory}$`, 'i') };
    }
    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;

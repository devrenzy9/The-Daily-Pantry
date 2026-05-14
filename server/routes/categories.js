import express from 'express';
import { readDb, writeDb } from '../utils/fileDb.js';

const router = express.Router();

// GET /api/categories
router.get('/', async (req, res, next) => {
  try {
    const db = await readDb();
    res.json(db.categories || []);
  } catch (err) {
    next(err);
  }
});

// GET /api/featuredCategories
router.get('/featuredCategories', async (req, res, next) => {
  try {
    const db = await readDb();
    res.json(db.featuredCategories || []);
  } catch (err) {
    next(err);
  }
});

// GET /api/categories/:id/products — get products in a category
router.get('/:id/products', async (req, res, next) => {
  try {
    const { id } = req.params;
    const db = await readDb();
    const category = db.categories.find(c => c.id === parseInt(id) || c.id === id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    const products = db.popularProducts.filter(p => p.cat?.toLowerCase() === category.title?.toLowerCase());
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// POST /api/categories
router.post('/', async (req, res, next) => {
  try {
    const { title, icon } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }
    const db = await readDb();
    const newCategory = {
      id: Date.now(),
      title,
      icon: icon || 'category-default.svg'
    };
    db.categories.push(newCategory);
    await writeDb(db);
    res.status(201).json(newCategory);
  } catch (err) {
    next(err);
  }
});

export default router;

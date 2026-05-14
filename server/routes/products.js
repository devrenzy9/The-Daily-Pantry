import express from 'express';
import { readDb, writeDb } from '../utils/fileDb.js';

const router = express.Router();

// GET /api/products — list with optional filters
router.get('/', async (req, res, next) => {
  try {
    const { category, search, sortBy, order, minPrice, maxPrice } = req.query;
    const db = await readDb();
    let products = [...db.popularProducts];

    if (category) {
      products = products.filter(p => p.cat?.toLowerCase() === category.toLowerCase());
    }
    if (search) {
      const q = search.toLowerCase();
      products = products.filter(p => p.name?.toLowerCase().includes(q));
    }
    if (minPrice) {
      products = products.filter(p => parseFloat(p.realPrice) >= parseFloat(minPrice));
    }
    if (maxPrice) {
      products = products.filter(p => parseFloat(p.realPrice) <= parseFloat(maxPrice));
    }
    if (sortBy && ['price', 'star', 'id'].includes(sortBy)) {
      const key = sortBy === 'price' ? 'realPrice' : sortBy;
      products.sort((a, b) => {
        let av = a[key] || 0;
        let bv = b[key] || 0;
        if (sortBy === 'price') {
          av = parseFloat(av);
          bv = parseFloat(bv);
        } else if (sortBy === 'star') {
          av = parseInt(av) || 0;
          bv = parseInt(bv) || 0;
        }
        return order === 'desc' ? bv - av : av - bv;
      });
    }

    res.json(products);
  } catch (err) {
    next(err);
  }
});

// GET /api/products/:id
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const db = await readDb();
    const product = db.popularProducts.find(p => p.id === parseInt(id) || p.id === id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    next(err);
  }
});

// GET /api/popularProducts
router.get('/popularProducts', async (req, res, next) => {
  try {
    const db = await readDb();
    res.json(db.popularProducts || []);
  } catch (err) {
    next(err);
  }
});

// GET /api/dailySells
router.get('/dailySells', async (req, res, next) => {
  try {
    const db = await readDb();
    res.json(db.dailySells || []);
  } catch (err) {
    next(err);
  }
});

// GET /api/dealsOfTheDay
router.get('/dealsOfTheDay', async (req, res, next) => {
  try {
    const db = await readDb();
    res.json(db.dealsOfTheDay || []);
  } catch (err) {
    next(err);
  }
});

export default router;

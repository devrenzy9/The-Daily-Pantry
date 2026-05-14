import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { readDb, writeDb } from '../utils/fileDb.js';

const router = express.Router();

// GET /api/cart
router.get('/', async (req, res, next) => {
  try {
    const db = await readDb();
    res.json(db.cart || { items: [], totalItems: 0, totalPrice: 0 });
  } catch (err) {
    next(err);
  }
});

// POST /api/cart — add item
router.post('/', async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    if (!productId || !quantity || quantity < 1) {
      return res.status(400).json({ error: 'Valid productId and quantity (≥1) are required' });
    }
    const db = await readDb();
    const product = db.popularProducts.find(p => p.id === parseInt(productId) || p.id === productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const cart = db.cart;
    const existingItem = cart.items.find(i => i.productId == productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        id: uuidv4(),
        productId: product.id,
        name: product.name,
        price: parseFloat(product.realPrice),
        img: product.img,
        quantity
      });
    }

    // Recalculate totals
    cart.totalItems = cart.items.reduce((sum, i) => sum + i.quantity, 0);
    cart.totalPrice = parseFloat(cart.items.reduce((sum, i) => sum + (i.price * i.quantity), 0).toFixed(2));

    await writeDb(db);
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

// PATCH /api/cart/:itemId — update quantity
router.patch('/:itemId', async (req, res, next) => {
  try {
    const { itemId } = req.params;
    const { quantity } = req.body;
    if (quantity === undefined || quantity < 0) {
      return res.status(400).json({ error: 'Quantity must be 0 or greater' });
    }

    const db = await readDb();
    const cart = db.cart;
    const item = cart.items.find(i => i.id === itemId);

    if (!item) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    if (quantity === 0) {
      cart.items = cart.items.filter(i => i.id !== itemId);
    } else {
      item.quantity = quantity;
    }

    cart.totalItems = cart.items.reduce((sum, i) => sum + i.quantity, 0);
    cart.totalPrice = parseFloat(cart.items.reduce((sum, i) => sum + (i.price * i.quantity), 0).toFixed(2));

    await writeDb(db);
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/cart/:itemId
router.delete('/:itemId', async (req, res, next) => {
  try {
    const { itemId } = req.params;
    const db = await readDb();
    const cart = db.cart;
    cart.items = cart.items.filter(i => i.id !== itemId);
    cart.totalItems = cart.items.reduce((sum, i) => sum + i.quantity, 0);
    cart.totalPrice = parseFloat(cart.items.reduce((sum, i) => sum + (i.price * i.quantity), 0).toFixed(2));
    await writeDb(db);
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/cart — clear cart
router.delete('/', async (req, res, next) => {
  try {
    const db = await readDb();
    db.cart = { items: [], totalItems: 0, totalPrice: 0 };
    await writeDb(db);
    res.json(db.cart);
  } catch (err) {
    next(err);
  }
});

export default router;

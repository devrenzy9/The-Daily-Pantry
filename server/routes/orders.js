import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { readDb, writeDb } from '../utils/fileDb.js';

const router = express.Router();

// GET /api/orders
router.get('/', async (req, res, next) => {
  try {
    const db = await readDb();
    const orders = (db.orders || []).sort((a, b) => new Date(b.orderedAt) - new Date(a.orderedAt));
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

// GET /api/orders/:id
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const db = await readDb();
    const order = db.orders.find(o => o.id === id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (err) {
    next(err);
  }
});

// POST /api/orders — place order
router.post('/', async (req, res, next) => {
  try {
    const db = await readDb();
    const cart = db.cart;

    if (!cart.items || cart.items.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }

    const order = {
      id: uuidv4(),
      items: cart.items.map(item => ({ ...item })),
      totalItems: cart.totalItems,
      totalPrice: cart.totalPrice,
      status: 'confirmed',
      orderedAt: new Date().toISOString()
    };

    if (!db.orders) db.orders = [];
    db.orders.push(order);
    db.cart = { items: [], totalItems: 0, totalPrice: 0 };
    await writeDb(db);
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
});

export default router;

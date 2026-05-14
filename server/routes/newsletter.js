import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { readDb, writeDb } from '../utils/fileDb.js';
import { validateEmail } from '../middleware/validation.js';

const router = express.Router();

// POST /api/newsletter
router.post('/', async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email || !validateEmail(email)) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    const db = await readDb();
    if (!db.newsletter) db.newsletter = [];

    const exists = db.newsletter.find(e => e.email.toLowerCase() === email.toLowerCase());
    if (exists) {
      return res.status(409).json({ error: 'Email already subscribed' });
    }

    const subscriber = {
      id: uuidv4(),
      email,
      subscribedAt: new Date().toISOString()
    };
    db.newsletter.push(subscriber);
    await writeDb(db);
    res.status(201).json(subscriber);
  } catch (err) {
    next(err);
  }
});

// GET /api/newsletter
router.get('/', async (req, res, next) => {
  try {
    const db = await readDb();
    res.json(db.newsletter || []);
  } catch (err) {
    next(err);
  }
});

export default router;

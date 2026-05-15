import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, '..', 'data', 'db.json');
const SEED_PATH = path.join(__dirname, '..', 'data', 'seed-data.json');

async function seed() {
  try {
    await fs.access(DB_PATH);
    const existing = await fs.readFile(DB_PATH, 'utf-8');
    const db = JSON.parse(existing);
    if (db.products && db.products.length > 0) {
      console.log('Database already seeded.');
      return;
    }
  } catch {
    // db.json doesn't exist or is empty — proceed
  }

  try {
    const seedData = await fs.readFile(SEED_PATH, 'utf-8');
    await fs.writeFile(DB_PATH, seedData, 'utf-8');
    console.log(' Database seeded successfully.');
  } catch (err) {
    console.error('Seed failed:', err.message);
    process.exit(1);
  }
}

seed();
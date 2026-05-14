import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, '..', 'db.json');

export async function readDb() {
  try {
    const data = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      return { products: [], categories: [], cart: { items: [], totalItems: 0, totalPrice: 0 }, orders: [], newsletter: [] };
    }
    throw err;
  }
}

export async function writeDb(data) {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

import { readDb, writeDb } from '../utils/fileDb.js';

export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateRequired(obj, fields) {
  const missing = fields.filter(f => !obj[f] && obj[f] !== 0);
  return missing.length > 0 ? `Missing required fields: ${missing.join(', ')}` : null;
}

export function validateId(id) {
  return typeof id === 'number' || (typeof id === 'string' && id.length > 0);
}

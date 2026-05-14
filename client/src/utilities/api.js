const API_BASE = 'http://localhost:3001/api';

export const api = {
  // Core methods
  async get(endpoint) {
    const res = await fetch(`${API_BASE}${endpoint}`);
    if (!res.ok) throw new Error(`GET ${endpoint} failed: ${res.status}`);
    return res.json();
  },

  async post(endpoint, data) {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`POST ${endpoint} failed: ${res.status}`);
    return res.json();
  },

  async patch(endpoint, data) {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`PATCH ${endpoint} failed: ${res.status}`);
    return res.json();
  },

  async delete(endpoint) {
    const res = await fetch(`${API_BASE}${endpoint}`, { method: 'DELETE' });
    if (!res.ok) throw new Error(`DELETE ${endpoint} failed: ${res.status}`);
    return res.json();
  },

  // Category endpoints
  getCategories: () => api.get('/categories'),
  getFeaturedCategories: () => api.get('/featuredCategories'),

  // Product endpoints
  getPopularProducts: () => api.get('/popularProducts'),
  getDailySells: () => api.get('/dailySells'),
  getDealsOfTheDay: () => api.get('/dealsOfTheDay'),
  getProduct: (id) => api.get(`/products/${id}`),

  // Cart endpoints
  getCart: () => api.get('/cart'),
  addToCart: (productId, quantity = 1) => api.post('/cart', { productId, quantity }),
  updateCartItem: (itemId, quantity) => api.patch(`/cart/${itemId}`, { quantity }),
  removeFromCart: (itemId) => api.delete(`/cart/${itemId}`),
  clearCart: () => api.delete('/cart'),

  // Order endpoints
  placeOrder: () => api.post('/orders'),
  getOrders: () => api.get('/orders'),

  // Newsletter
  subscribeNewsletter: (email) => api.post('/newsletter', { email }),
};

const test = require('node:test')
const assert = require('node:assert')
const request = require('supertest');

const app = require('../src/app');

test('GET /products should return all products', async () => {
    const response = await request(app)
        .get('/products');
    
    assert.equal(response.status, 200);
    assert.ok(Array.isArray(response.body))
});

'use strict';

const server = require('../server.js');

const supertest = require('supertest');

const request = supertest(server.app);


describe('server', () => {
 
  it('should get 404 status', async () => {
    const response = await request.get('/n');
    expect(response.status).toBe(404);
  });

  it('should get a welcome message', async () => {
    //arrange
    //let route = '/';
    //act
    const response = await request.get('/');
    //assert
    expect(response.status).toBe(200);
    expect(response.text).toBe('welcome to server.js');
  });

  it('should get an error', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });


});
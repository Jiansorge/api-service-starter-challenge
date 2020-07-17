const app = require("../app");
const request = require('supertest');
 
describe('GET /', function () {
  it('respond with 200 & json', function (done) {
      request(app)
          .get('/')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
  });
});
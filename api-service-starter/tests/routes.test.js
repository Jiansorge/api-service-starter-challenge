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

describe('GET /api/:id using correct parameter', function() {
  it('responds with json', function(done) {
    request(app)
      .get('/api/owid-covid-data')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /api/:id using INcorrect parameter', function() {
  it('responds with 404', function(done) {
    request(app)
      .get('/api/wrong-parameter')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
});
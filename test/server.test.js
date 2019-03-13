var request = require('supertest');
var host_url = 'https://jsonplaceholder.typicode.com/'
describe('Sample from https://jsonplaceholder.typicode.com/', function() {
  describe('Request Id 1', function() {
    var container_url = host_url + 'posts/1';
    container = request(container_url);
    it('MUST support GET', function (done) {
      container
        .get('')
        .expect(200)
        .end(function(err, res){
          response = res;
          console.log(response.body)
          done()
        });
    });
  });
  describe('Request Should Not Found', function() {
    var container_url = host_url + 'posts/101';
    container = request(container_url);
    it('MUST support GET', function (done) {
      container
        .get('')
        .expect(404)
        .end(function(err, res){
          console.log('result', res.body)
          console.log('error', err)
          done()
        });
    });
  });
});
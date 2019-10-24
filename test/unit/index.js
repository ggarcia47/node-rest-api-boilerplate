const assert = require('chai').assert;
const app = require('../../src/application/controllers/user.controller');
result = app.getUsers();
describe('Unit Test ', () => {
  it('Should return an object of Users', (done) => {
    assert.typeOf(result,'Object');
    done();
  });
});

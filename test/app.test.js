const mocha = require('mocha');
const chai = require('chai');
const expect  = chai.expect;
const calc = require('../test/app.test.js');

describe('testing sum function', function() {
  it('sum(1, 2) = 3', function() {
    expect(calc.sum(1, 2)).to.equal(3);
  });
});
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('it performs calculations on the rounded numbers', () => {
  describe('returns the sum if type is sum', () => {
    it('should return 2', () => {
      assert.equal(calculateNumber('SUM', 1, 1), 2);
    });
    it('handles floating points', () => {
      assert.equal(calculateNumber('SUM', 1.0, 2.0), 3);
    });
    it('correctly rounds number', () => {
      assert.equal(calculateNumber('SUM', 1.2, 2.4), 3);
    });
  });
  describe('returns subtraction if type is subtract', () => {
    it('should return 2', () => {
      assert.equal(calculateNumber('SUBTRACT', 3, 1), 2);
    });
  });
});

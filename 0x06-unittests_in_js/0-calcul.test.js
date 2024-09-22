const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('it performs calculations on the rounded numbers', () => {
  describe('returns the sum', () => {
    it('should return 2', () => {
      assert.equal(calculateNumber(1, 1), 2);
    });
    it('handles floating points', () => {
      assert.equal(calculateNumber(1.0, 2.0), 3);
    });
    it('correctly rounds number', () => {
      assert.equal(calculateNumber(1.2, 2.4), 3);
    });
  });
});

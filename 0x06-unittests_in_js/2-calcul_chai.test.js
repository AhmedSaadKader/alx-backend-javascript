const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('it performs calculations on the rounded numbers', () => {
  describe('returns the sum if type is sum', () => {
    it('should return 2', () => {
      expect(calculateNumber('SUM', 1, 1)).to.equal(2);
    });
    it('handles floating points', () => {
      expect(calculateNumber('SUM', 1.0, 2.0)).to.equal(3);
    });
    it('correctly rounds number', () => {
      expect(calculateNumber('SUM', 1.2, 2.4)).to.equal(3);
    });
  });
  describe('returns subtraction if type is subtract', () => {
    it('should return 2', () => {
      expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
    });
  });
  describe('returns division if type is DIVIDE', () => {
    it('should return 3', () => {
      expect(calculateNumber('DIVIDE', 3.1, 1)).to.equal(3);
    });
    it('should return Error', () => {
      expect(calculateNumber('DIVIDE', 3.1, 0)).to.equal('Error');
    });
  });
  describe('returns NAN if type is incorrect', () => {
    it('should return 3', () => {
      expect(calculateNumber('error', 3.4, 1)).to.equal(undefined);
    });
  });
});

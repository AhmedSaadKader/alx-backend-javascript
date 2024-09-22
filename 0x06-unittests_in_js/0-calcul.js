/**
 * Makes calculations on 2 numbers
 * @param {number} a first number
 * @param {number} b second number
 */

const calculateNumber = (a, b) => {
  const rounded_number_1 = Math.round(a);
  const rounded_number_2 = Math.round(b);
  return rounded_number_1 + rounded_number_2;
};

module.exports = calculateNumber;

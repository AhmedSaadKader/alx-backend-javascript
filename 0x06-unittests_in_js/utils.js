const Utils = {
  calculateNumber(type, a, b) {
    const rounded_number_1 = Math.round(a);
    const rounded_number_2 = Math.round(b);
    if (type === 'SUM') return rounded_number_1 + rounded_number_2;
    else if (type === 'SUBTRACT') return rounded_number_1 - rounded_number_2;
    else if (type === 'DIVIDE') {
      if (rounded_number_2 === 0) return 'Error';
      return rounded_number_1 / rounded_number_2;
    }
  },
};

module.exports = Utils;

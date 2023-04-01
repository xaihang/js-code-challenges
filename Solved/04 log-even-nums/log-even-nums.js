const logEvenNums = function(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

module.exports = logEvenNums;


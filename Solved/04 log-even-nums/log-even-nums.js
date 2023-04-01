// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

const logEvenNums = function(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

module.exports = logEvenNums;

// Alternatively, this problem could have been solved by incrementing i by 2 instead of 1

// const logEvenNums = function (num) {
//   for (const i = 0; i <= num; i += 2) {
//     console.log(i);
//   }
// };

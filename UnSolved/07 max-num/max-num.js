// Write code to return the largest number in the given array

let maxNum = function (arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let currentNum = arr[i];

    if (currentNum > max) {
      max = currentNum;
    }
  }

  return max;
};

module.exports = maxNum;
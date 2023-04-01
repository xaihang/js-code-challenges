const productOfLargestTwo = function (arr) {
  let largest = null;
  let secondLargest = null;

  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];

    if (currentNumber > largest || largest === null) {
      secondLargest = largest;
      largest = currentNumber;
    } else if (currentNumber > secondLargest || secondLargest === null) {
      secondLargest = currentNumber;
    }
  }

  return largest * secondLargest;
};

module.exports = productOfLargestTwo;
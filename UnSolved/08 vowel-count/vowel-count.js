// Write code to return the the number of vowels in `str`

const vowelCount = function(str) {
  let result = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();

    if (vowels.indexOf(letter) !== -1) {
      result += 1;
    }
  }

  return result;
};

module.exports = vowelCount; 

// Alternatively, this problem could have been solved without the use of `indexOf`, but by using the logical OR (||) operator to check for each vowel

// const vowelCount = function (str) {
//   const result = 0;

//   for (const i = 0; i < str.length; i++) {
//     const letter = str[i].toLowerCase();

//     if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
//       result += 1;
//     }
//   }

//   return result;
// };

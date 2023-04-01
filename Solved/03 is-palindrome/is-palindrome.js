const isPalindrome = function(str) {
  const reversedString = str
    .split('')
    .reverse()
    .join('');

  if (reversedString === str) {
    return true;
  } else {
    return false;
  }
};

module.exports = isPalindrome;


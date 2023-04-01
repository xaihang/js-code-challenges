const isPalindrome = require('../is-palindrome');


describe('isPalindrome', function() {
  it('takes a string and returns true if the string is a palindrome', function() {
    const str = 'radar';

    const result = isPalindrome(str);

    expect(result).toBeTruthy()
    // expect(result).toBeFalsy()
  });

  it('takes a string and returns false if the string is not a palindrome', function() {
    const str = 'engage';

    const result = isPalindrome(str);

    expect(result).toBeFalsy()
    // expect(result).toBeTruthy()
  });
});

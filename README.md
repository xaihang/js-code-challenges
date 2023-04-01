# JavaScript Code Challenges + Jest Testing 
This repository contains a collection of random JavaScript code challenges with Jest test units. The code challenges cover various topics in JavaScript programming, such as arithmetic operations, string manipulation, array manipulation, and more. Each code challenge has a corresponding Jest test unit, allowing developers to test their solutions and check if they meet the desired functionality. This repository is intended for developers who want to practice their JavaScript programming skills and learn how to write test units using Jest.

## TABLE OF CONTENT
1. [Jest Setup](#jest-setup)
1. [How to write a simple test with Jest](#how-to-write-a-simple-test-with-jest)
1. []()
1. []()
1. []()
1. []()
1. []()


## Jest Setup 
To set up a Jest environment for your project, you will need to follow these general steps:

1. Install Jest as a dev dependency in your project using a package manager like npm or yarn. For example, you can run `npm install --save-dev jest` in your project directory to install Jest.

1. Create a test directory in your project and add your test files with the `.test.js` or `.spec.js` extension. Jest will automatically find and run these tests.

1. Add a script to your `package.json` file to run Jest. For example, you can add the following script to run Jest with the default configuration:

    ```js
    {
    "scripts": {
        "test": "jest"
    }
    }
    ```

1. Run the Jest tests using the command `npm test` or `yarn test` in your project directory. Jest will automatically find and run all test files with the .test.js or .spec.js extension in your test directory.

---
## How to write a simple test with Jest
To write a simple test using Jest, you will need to create a separate test file (e.g. filename.test.js) for each module or function you want to test.

Here's a basic structure for a simple Jest test:

```js
// Import the function or module you want to test
const myFunction = require('../myFunction');

// Write a test using the 'test' function from the Jest API
test('should return the expected result', () => {
  // Arrange: set up any necessary data or variables
  const input = 'hello';

  // Act: execute the function being tested
  const result = myFunction(input);

  // Assert: check that the result matches the expected value
  expect(result).toBe('expected result');
});
```

In this example, we first import the function or module we want to test using require(). We then write a test using the test() function from the Jest API.

The test() function takes two arguments: a description of what the test does, and a callback function that contains the actual test code. Inside the callback function, we first set up any necessary data or variables (the "Arrange" step), then execute the function being tested (the "Act" step), and finally check that the result matches the expected value using the expect() function and a matcher function (the "Assert" step).

Some common matcher functions include toBe(), toEqual(), and toMatch(), among others.

Once you have written your test, you can run it using the npm test command in your terminal.

---
## Technology
1. [Jest](https://jestjs.io/)
1. JavaScript 


---
## Contact 
Let's stay connected! I welcome your feedback and compliments, so please feel free to drop me a message below.

<a href="https://www.linkedin.com/in/xai-hang/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a> 
# Basic of Jest

## TABLE OF CONTENT
1. [Jest Setup](#jest-setup)
1. [Basic keywords & functions](#basic-keywords--functions)
1. [How to write a simple test with Jest](#how-to-write-a-simple-test-with-jest)
1. [Why Jest?](#why-jest)


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
## Basic keywords & functions
Here are some basic keywords/functions in Jest that are often used:

* `describe()` - used to group tests together
it() - used to define a single test case
* `expect()` - used to define the expected output of a test case
* `toBe()` - used to check if two values are strictly equal
* `toEqual()` - used to check if two values are equal
* `beforeEach()` - used to define a setup function that runs before each test case
* `afterEach()` - used to define a teardown function that runs after each test case
* `beforeAll()` - used to define a setup function that runs before all test cases
* `afterAll()` - used to define a teardown function that runs after all test cases
* `toMatch()` - used to check if a value matches a regular expression.

---
## How to write a simple test with Jest
To write a simple test using Jest, you will need to create a separate test file (e.g. filename.test.js) for each module or function you want to test.

Here's a basic structure for a Jest test:

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

## Why Jest?
There are several benefits of using Jest for testing:

1. Easy to Use: Jest provides a simple and easy-to-use API that allows developers to write and run tests with minimal setup.

1. Fast: Jest is designed to be fast and parallelizes test runs across multiple cores, which can significantly reduce the time it takes to run tests.

1. Snapshot Testing: Jest has built-in support for snapshot testing, which allows you to capture the output of your component and compare it against a previously saved version. This can help catch regressions and ensure that your components are working as expected.

1. Mocking: Jest provides built-in mocking capabilities that allow you to mock modules, functions, and objects. This can be particularly useful when testing complex components that have many dependencies.

1. Coverage Reports: Jest can generate coverage reports that show how much of your code is covered by your tests. This can help you identify areas of your code that need more testing and ensure that your code is well tested.

Jest is a powerful and easy-to-use testing framework that can help you write better code and catch bugs early in the development process.
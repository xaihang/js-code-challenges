const { add, subtract, multiply, divide } = require('../arithmetic');

describe("add", () => {
  it("should add two numbers", () => {
    const num1 = 10;
    const num2 = 24;

    const result = add(num1, num2);

    expect(result).toEqual(34);
  });
});

describe("subtract", () => {
  it("should subtract the second number from the first number", () => {
    const num1 = 100;
    const num2 = 91;

    const result = subtract(num1, num2);

    expect(result).toEqual(9);
  });
});

describe("multiply", () => {
  it("should multiply the two numbers", () => {
    const num1 = 7;
    const num2 = 70;

    const result = multiply(num1, num2);

    expect(result).toEqual(490);
  });
});

describe("divide", () => {
  it("should divide the first number by the second number", () => {
    const num1 = 33;
    const num2 = 11;

    const result = divide(num1, num2);

    expect(result).toEqual(3);
  });
});

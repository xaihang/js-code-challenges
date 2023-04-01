const logEvenNums = require('../log-even-nums');

beforeEach(() => {
  console.log = jest.fn();
});

describe("logEvenNums", () => {
  it("should log even numbers 0 through `num`", () => {
    const num = 13;

    logEvenNums(num);

    expect(console.log.mock.calls).toEqual([[0], [2], [4], [6], [8], [10], [12]]);
  });
});

afterEach(() => {
  console.log.mockRestore();
});

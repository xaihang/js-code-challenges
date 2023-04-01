const logNums = require('../log-nums');

beforeEach(() => {
  console.log = jest.fn();
});

describe("logNums", () => {
  it("log numbers 1 through `num`", () => {
    const num = 10;

    logNums(num);

    expect(console.log.mock.calls).toEqual([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]);
  });
});

afterEach(() => {
  console.log.mockRestore();
});

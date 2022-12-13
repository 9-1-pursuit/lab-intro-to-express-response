const request = require("supertest");

const app = require("../app.js");

it("Testing to see if supertest works", () => {
  expect(1).toBe(1);
});

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});

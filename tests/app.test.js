const app = require("../app.js");
const request = require("supertest");

// Trial test
// it("Testing to see if supertest works", () => {
//   expect(1).toBe(2);
// });

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((res) => {
        // expect(res.text).toBe("Hello, world!")
        expect(res.statusCode).toBe(200);
      });
  });
});

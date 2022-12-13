const app = require("../app.js");
const request = require("supertest");

// it("testing supertest", () => {
//   expect(1).toBe(1);
// });

describe("Test the root path", () => {
  test("It should respond the GET method", () => {
    return request(app)
      .get("/")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});

describe("Test path 1", () => {
  test("It should respond the GET method", () => {
    return request(app)
      .get("/1")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});

describe("Test path 2", () => {
  test("It should respond the GET method", () => {
    return request(app)
      .get("/2")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
describe("Test path 3", () => {
  test("It should respond the GET method", () => {
    return request(app)
      .get("/3")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
describe("Test path 4", () => {
  test("It should respond the GET method", () => {
    return request(app)
      .get("/4")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
describe("Test path 5", () => {
  test("It should respond the GET method", () => {
    return request(app)
      .get("/5")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
describe("Test path 6", () => {
  test("It should respond the GET method", () => {
    return request(app)
      .get("/6")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
describe("Test path 7", () => {
  test("It should respond the GET method", () => {
    return request(app)
      .get("/7")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
describe("Test path 8", () => {
  test("It should respond the GET method", () => {
    return request(app)
      .get("/8")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
describe("Test path 9", () => {
  test("It should respond the GET method", () => {
    return request(app)
      .get("/9")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
describe("Test path 10", () => {
  test("It should respond the GET method", () => {
    return request(app)
      .get("/10")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
describe("Test path 10", () => {
  test("It should respond the GET method", () => {
    return request(app)
      .get("/missCleoFortunes")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});

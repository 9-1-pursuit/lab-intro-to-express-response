const app = require("../app.js");
const request = require("supertest");

// Initial test
// it("Testing to see if supertest works", () => {
//   expect(1).toBe(2);
// });

// Testing root path
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

// Testing the other paths
describe("Test the Ace Ventura path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/ace-ventura")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
describe("Test the Buzz Lightyear path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/buzz-lightyear")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
describe("Test the Dorothy path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/dorothy")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
describe("Test the Gollum path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/gollum")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
describe("Test the Homer Simpson path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/homer-simpson")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
describe("Test the James Bond path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/james-bond")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
describe("Test the Joker path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/joker")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
describe("Test the Terminator path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/terminator")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
describe("Test the Tim Gunn path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/tim-gunn")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
describe("Test the Tony Montana path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/tony-montana")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});

describe("Test the Magic 8 Ball path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/magic8")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});

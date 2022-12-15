// DEPENDENCIES
const app = require("../app.js");
const request = require("supertest");

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the path for terminator", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/terminator")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the path for terminator2", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/terminator2")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the path for tim-gunn", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/tim-gunn")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the path for emeril", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/emeril")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the path for homer-simpson", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/homer-simpson")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

describe("Test the path for batman", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/batman")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

describe("Test the path for zeus", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/zeus")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the path for james-bond", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/james-bond")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the path for travis-bickle", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/travis-bickle")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the path for tony-montana", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/tony-montana")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the path for gollum", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/gollum")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })

describe("Test the path for magic 8 ball", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/magic8")
        .then(response => {
          expect(response.statusCode).toBe(200)
        })
    })
  })
const app = require('../app.js');
const request = require('supertest');

// it('Testing to see if supertest works', () => {
//   expect(1).toBe(1);
// });

describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

// describe('Test the root path', () => {
//   test(`It shouldn't response the GET method`, () => {
//     return request(app)
//       .get('/')
//       .then((response) => {
//         expect(response.statusCode).toBe(418);
//       });
//   });
// });
describe('Test the Tim path', () => {
  test('It should response the GET method', () => {
    return request(app)
      .get('/tim-gunn')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe('Test the Terminator path', () => {
  test('It should response the GET method', () => {
    return request(app)
      .get('/terminator')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
describe('Test the Karate-Kid path', () => {
  test('It should response the GET method', () => {
    return request(app)
      .get('/karate-kid')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
describe('Test the Emeril path', () => {
  test('It should response the GET method', () => {
    return request(app)
      .get('/Emeril')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
describe('Test the Steven path', () => {
  test('It should response the GET method', () => {
    return request(app)
      .get('/Steven-McGarrett')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe('Test the Coach path', () => {
  test('It should response the GET method', () => {
    return request(app)
      .get('/Coach-Taylor')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe('Test the Homer path', () => {
  test('It should response the GET method', () => {
    return request(app)
      .get('/Homer-Simpson')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
describe('Test the Banner path', () => {
  test('It should response the GET method', () => {
    return request(app)
      .get('/Bruce-Banner')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
describe('Test the JJ path', () => {
  test('It should response the GET method', () => {
    return request(app)
      .get('/JJ-Evans')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
describe('Test the Batman path', () => {
  test('It should response the GET method', () => {
    return request(app)
      .get('/Batman')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
describe('Test the Magic-8 path', () => {
  test('It should response the GET method', () => {
    return request(app)
      .get('/magic8')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

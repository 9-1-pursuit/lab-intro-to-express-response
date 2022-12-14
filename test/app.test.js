const supertest = require('supertest')
const { request } = require('../app.js')
const app = require('../app.js')

it("Testing to see if supertest works",() => {
expect(1).toBe(1)
})
//test failed with expect(1).toBe(2)

describe('Test teh root path', () => {
   test('It should give response to the GET method', () =>{
    return request(app)
    .get("/")
    .then(response => {
        expect(response.statusCode).toBe(418)
    })
   }) 
})
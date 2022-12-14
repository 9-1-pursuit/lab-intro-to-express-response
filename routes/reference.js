// If wanted to add more params to paths i.e /:value/:show
const express = require("express")
let router = express.Router()
//  CODE FOR APP.JS OR "main" FILE
    /* 
    use reference.js to handle /:value endpoints in routes -> endpoint  === Router object
    const endpoint = require("./routes/reference")
    // link route to particular path using .use() method
    app.use("/:show", endpoint) 
    */

// THIS PAGE
// use router object not app
// middleware ? 'next(obj)' param ? next()
/* 
    router.use((req,resp,next) => {
        // req is object can dot into for properties i.e req.url; next() signals run next code 'in line'
        next()
    })
*/

// get data from shows objects to compare to value found in 'middleware' router.params, to be used in .get() to send back
// const {reference} = require("./data.js")


// use router.params(middleware runs b4 the .get, or .put etc) to look into reference objects and set value to be used in router.get .send
// router.param("show", (req, resp, next, show) => {
//     console.log(value)
// //   return req.punchline = () => {
// //     for (let key in reference){
// //         value.toLowerCase() === key.toLowerCase() ? reference[key] : "Error Page Not Found"
  
// //      }
// //   } 
    
//     next()
// })
//  CREATE 9 ROUTES -> params?
// the path on this page can be "/" <- represents /:value
// router.get("/", (req,resp) => {
//     console.log(req.params.value)
//     resp.send(`a second param was detected`)
// })

// export router 
module.exports = router
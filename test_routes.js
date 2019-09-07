var express = require('express')
const request = require('request');

var router = express.Router()

router.get('/test', function (req, res) {
    request('https://jagrmiaiohttpserver.herokuapp.com/testselect', function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        res.send(response)
    });

})
// define the about route
router.get('/about', function (req, res) {
    res.send('About birds')
})

module.exports = router

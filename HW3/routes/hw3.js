const express = require('express');
const router = express.Router();
const request = require("request");

const keys = require('../config/keys');

/* GET home page. */
router.get('/', function(req, res, next) {

    const options = {
        method: 'GET',
        url: 'https://www.amdoren.com/api/currency.php',
        qs:
            {
                api_key: keys.api_key,
                from: 'USD',
                to: 'TRY'
            },
        headers:
            {
                'Postman-Token': 'd48f37a8-39cb-421a-af02-d102c0709ab5',
                'cache-control': 'no-cache'
            },
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);

        res.render('hw3', {title: 'HW3 External Data Test', money: body.amount});
    });


});



module.exports = router;
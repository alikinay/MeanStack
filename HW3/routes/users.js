const express = require('express');
const router = express.Router();
const request = require("request");

router.get('/', function(req, res, next) {

    //this will allow Angular Port to accept Node requests.
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);

    let profiles = [
        { id: 11, name: 'Ali' },
        { id: 12, name: 'Ela' },
        { id: 13, name: 'Fikri' },
        { id: 14, name: 'Turkan' },
        { id: 15, name: 'Semahat' },
        { id: 16, name: 'Omer' },
        { id: 17, name: 'Maya' },
        { id: 18, name: 'Zeynep' },
        { id: 19, name: 'Rail' },
        { id: 20, name: 'Mithat' }
    ];

    console.log('Sending user profiles into front end')
    res.send(profiles);

});

// router.post('/', function(req, res, next) {
//
//     //this will allow Angular Port to accept Node requests.
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.header("Cache-Control", "no-cache, no-store, must-revalidate");
//     res.header("Pragma", "no-cache");
//     res.header("Expires", 0);
//
//     profiles.push(newProfile);
//     res.send(profiles);
// });


module.exports = router;
const router = require('express').Router();
const passport = require('passport');


router.get('/', passport.authenticate('google', { scope: ['profile'] }));

router.get('/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Cache-Control", "no-cache, no-store, must-revalidate");
        res.header("Pragma", "no-cache");
        res.header("Expires", 0);

        console.log("successful login")
        // Successful authentication, redirect the page

        //let googleId= req.user.value.googleId;
        //let username = req.user.value.googleName;


        var username = req.user.value.googleName ;

        console.log("username: " + req.user.value.googleName)


        res.redirect("http://localhost:4200/dashboard/" + username)
        //res.send({username: req.user.value.googleName, siteToGo: "http://localhost:4200/exchanges" })

        // res.send({username: req.user.value.googleName})

    });

router.get('/logout', function(req,res,next){
    req.logout();
    //res.render('test',{user:req.user})
});

module.exports = router;
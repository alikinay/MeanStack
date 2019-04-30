const router = require('express').Router();
const passport = require('passport');

router.get('/', passport.authenticate('google', { scope: ['profile'] }));

router.get('/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, render the page.
        res.render('hw3',{user:req.user})
    });

router.get('/logout', function(req,res,next){
    req.logout();
    res.render('hw3',{user:req.user})
})

module.exports = router;
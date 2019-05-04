const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const hw3Router = require('./routes/hw3');
const authRoutes = require('./routes/oauth');
const usersRouter = require('./routes/users');

let db = require('./mongo/mongo');
db.connect((err,client) => {
    if (err) { console.log(`ERR: ${err}`)}
    else {console.log(`Connected`)}
})

let googleConfig = require('./config/google');
let passport = require('passport');
let googleStrategy = require ('passport-google-oauth20').Strategy;

passport.use(new googleStrategy({
        clientID: googleConfig.clientID,
        clientSecret: googleConfig.clientSecret,
        callbackURL: googleConfig.clientURL
    },
    function(accessToken, refreshToken, profile, cb) {
        db.getDB().collection('users')
            .findOneAndReplace(
                {googleId: profile.id}, {googleId: profile.id,
                googleName: profile.displayName}, {upsert: true},
                function (err, user) {
                    return cb(err, user);
                })
    }
));

//this lets you choose which key you want to send back and forth.
//in this one user object has only one thing in it.
//or it could be user.name if we had more from google.
passport.serializeUser(function(user,done){
    done(null,user);
});

//this is how the request coming into node.
//this saves time space in the network.
passport.deserializeUser(function(user,done){
    //db stuff is optional
    db.getDB().collection('users')
        .find({user}, (err,response) => {
        })
    done(null,user);
});


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('express-session')({
    secret:'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


//app.use('/', hw3Router);
//app.use('/oauth', authRoutes);

app.use('/', authRoutes);
app.use('/hw3', hw3Router);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// npm install express
// npm install body-parser
// npm install -D nodemon 
const express = require('express');
let conexion = require('./Services/Conexion.js')
const UserController = require('./Controllers/UserController');
const app = express();
const Puerto = 7766;
const expressSession = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
require("dotenv").config();

// midle ware
app.use((req, res, next) => {
    //permitimos que las peticiones se puedan hacer desde cualquier sitio
    res.header('Access-Control-Allow-Origin', '*')
        //res.header('Access-Control-Allow-Origin', '192.168.0.11')
        // configuramos las cabeceras que pueden llegar
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method')
        // configuramos los métodos que nos pueden llegar
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
    next(); // para que se salga de esta función
})


app.get('/user/:id', UserController.getUser);
app.get('/userss/:firstname', UserController.getUser_byname);
app.get('/users', UserController.getUsers);
app.post('/user', UserController.saveUser);
app.put('/user/:id', UserController.updateUser);
app.delete('/user/:id', UserController.deleteUser);
app.listen(process.env.PORT || Puerto)


/**
 * Session Configuration
 */

const session = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: false
};

if (app.get("env") === "production") {
    // Serve secure cookies, requires HTTPS
    session.cookie.secure = true;
}
/**
 * Passport Configuration
 */

const strategy = new Auth0Strategy({
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        callbackURL: process.env.AUTH0_CALLBACK_URL
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
        /**
         * Access tokens are used to authorize users to an API
         * (resource server)
         * accessToken is the token to call the Auth0 API
         * or a secured third-party API
         * extraParams.id_token has the JSON Web Token
         * profile has all the information from the user
         */
        return done(null, profile);
    }
);

app.use(expressSession(session));

passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());
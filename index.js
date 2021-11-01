// npm install express
// npm install body-parser
// npm install -D nodemon 
const express = require('express');
let conexion = require('./Services/Conexion.js')
const UserController = require('./Controllers/UserController');
const app = express();
const Puerto = 7766;

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
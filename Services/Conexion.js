const mongoose = require('mongoose');
//conexion to mongodb service 
mongoose.connect('mongodb+srv://admin:Cafe2020@cluster0.9pawl.mongodb.net/dbtest?retryWrites=true&w=majority', { useUnifiedTopology: true }, { useNewUrlParser: true }).then(
    () => {
        console.log("Connecting to database correctly ")
    }, err => {
        console.log('fallo en la base de datos:' + err)
    }
)

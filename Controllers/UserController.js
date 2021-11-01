let User = new require('../Models/UserModel.js')
let conexion = require('../Services/Conexion.js')
    //CRUD user functions 
function getUser(req, res) {
    let idUser = req.params.id
    User.findById(idUser).then(
        userEncontrado => {
            if (!userEncontrado) {
                res.status(404).send({
                    accion: 'get one',
                    mensaje: 'No existe el User con ese id'
                })
            } else {
                res.status(200).send({
                    accion: 'get one',
                    data: userEncontrado
                })
            }
        }
    ).catch(
        err => {
            res.status(500).send({
                accion: 'get one',
                mensaje: 'problema el obtener un User'
            })
        }
    )
}

function getUser_byname(req, res) {
    let nameUser = req.params.firstname
    User.find({ firstname: nameUser }, function(err, results) {
        console.log(results[0])
        if (!results[0]) {
            console.log("User encuentrado" + results[0])
            res.status(404).send({
                accion: 'get one',
                mensaje: 'No existe el User con ese Name'
            })
        } else {
            res.status(200).send({
                accion: 'get one',
                data: results[0]
            })
        }
    }).catch(
        err => {
            res.status(500).send({
                accion: 'get one',
                mensaje: 'problema el obtener un User'
            })
        }
    )
}






function getUsers(req, res) {
    User.find().exec((err, users) => {
        if (err) {
            res.status(500).send({
                accion: 'get all',
                mensaje: 'problema al leer los users'
            })
        } else if (!users) {
            res.status(404).send({
                accion: 'get all',
                mensaje: 'No hay users'
            })
        } else {

            res.status(200).send({
                accion: 'get all ok',
                data: users,

            })
        }
    })

    /* Coche.find().sort('-_id').exec().then(
         coches => {
             if(!coches){
                 res.status(404).send( {accion:'get all', mensaje:'No hay coches'} )
             }else{
                 res.status(200).send( {accion:'get all', data: coches})
             }
         }
     ).catch(
         err => { 
             res.status(500).send( {accion:'get all', mensaje:'problema al leer los coches:'+err} )
         }
     )*/

}

function saveUser(req, res) {
    let param = req.body
    console.log(param)
        // res.status(200).send( {accion:"save", data: param})
    let user = new User();
    user.firstname = param.firstname,
        user.lastname = param.lastname,
        user.email = param.email,
        user.password = param.password,
        user.avatar = param.avatar,
        user.telefon = param.telefon,
        user.addess = param.addess,
        user.role = param.firstname,
        user.age = param.role,
        user.token = param.token,
        user.description = param.description,
        user.nacion = param.nacion,
        user.formacion = param.formacion,
        user.lenguage = param.lenguage,
        user.redes = param.redes,


        user.save().then(
            userGuardado => {
                res.status(200).send({
                    accion: 'save',
                    data: userGuardado
                })
            }
        ).catch(
            err => {
                res.status(500).send({
                    accion: 'save',
                    mensaje: 'problema al guardar un user:' + err
                })
            }
        )
}

function updateUser(req, res) {
    let idUser = req.params.id
    let param = req.body

    //{new:true}  ===>  hace que devuelva el nuevo coche insertado
    Coche.findByIdAndUpdate(idUser, param, {
        new: true
    }).then(
        userActualizado => {
            res.status(200).send({
                accion: 'update',
                data: userActualizado
            })
        }
    ).catch(
        err => {
            res.status(500).send({
                accion: 'update',
                mensaje: 'problema al actualizar user:' + err
            })
        }
    )
}

function deleteUser(req, res) {
    var idUser = req.params.id
    User.findByIdAndDelete(idUser).then(
        userBorrado => {
            res.status(200).send({
                accion: 'delete',
                data: userBorrado
            })
        }
    ).catch(
        err => {
            res.status(500).send({
                accion: 'delete',
                mensaje: 'problema al borrar this user:' + err
            })

        }
    )
}

module.exports = {
    getUser,
    getUsers,
    saveUser,
    updateUser,
    deleteUser,
    getUser_byname
}
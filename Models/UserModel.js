const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = Schema({
    _id: { type: Schema.ObjectId, auto: true },
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    avatar: String,
    telefon: String,
    addess: String,
    role: String,
    age: Number,
    token: String,
    description: String,
    nacion: String
})

module.exports = mongoose.model('Users', UserSchema)
const mongoose = require('mongoose')
const crypot = require('crypto')

const Schema = mongoose.Schema
const userSchema = new Schema({
    username: {
        type: String,
        index: true,
        unique:true,
        require: true
    },
    password: {
        type: String,
        require: true,
        set: v => {
            hash = crypot.createHash('md5')
            hash.update(v)
            return hash.digest().toString('hex')
        }
    },
    email: {
        type: String,
        require: true
    }
})

module.exports =  mongoose.model('users', userSchema)
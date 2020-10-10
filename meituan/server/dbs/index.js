// import mongoose from 'mongoose'
// import config from 'config'

const mongoose = require('mongoose')
const config = require('./config')

const Users = require('./models/users')






mongoose.connect(config.dbs, {
    bufferCommands: false,
    autoIndex: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
}).catch(err => console.log('连接错误', err))
const database = mongoose.connection

// const users = Users({
//     username: 'oshino',
//     password: 'a1a1'
// })

database.then(() => {
    // let q = Users.findOne({username: 'erika'})
    // console.log(q)

    
    // let u = new Users({username: 'shinobu', password: '154584'})
    // u.save(() => {
        Users.find()
            .or({username: 'erika'}, {username: 'echo'})
            .exec((err, users) => {
                if (err) console.log('err', err)
                console.log(users)
                database.close()
            })
    // })
})

// console.log(users instanceof Users)

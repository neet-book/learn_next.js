const mongoose = require('mongoose')
const config = require('./config')

const Users = require('./models/users')


mongoose.connect(config.dbs, {
    bufferCommands: false,
    autoIndex: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
}).catch(err => console.log('连接错误', err))
// const database = mongoose.connections[0]



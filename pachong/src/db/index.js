const MongoClient = require('mongod').MongoClient

const url = 'mongodb://127.0.0.1:27017'

class Database {
  constructor () {

  }

  async connect () {
    return new Promise(res => {
      MongoClient.connect(url, (err, client) => {
        if (err) {
          console.log('数据库连接失败： ', err)
          res(null)
          return
        }

        res(client)
      })
    })
  }
  
}
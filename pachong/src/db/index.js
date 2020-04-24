const MongoClient = require('mongod').MongoClient

const url = 'mongodb://127.0.0.1:27017'

class Database {
  constructor () {
    this.client = null
    this.db = null
    this.collection = null
  }

  // 链接数据库
  async connect (database, collection) {
    const client =  await new Promise(res => {
      MongoClient.connect(url, (err, client) => {
        if (err) {
          console.log('数据库连接失败： ', err)
          res(null)
          return
        }

        res(client)
      })

      this.client = client
      if (database) this.db = client.db(database)
      if (collecton) this.collection = client.db(database).collection(collection)
      return client
    })

    
  }
  
  // 增
  async insert(doc) {
    return new Promise(res => {
      if (!Array.isArray(doc)) doc = [doc]
      this.collection.insertMany(doc, (err, result) => {
        if (err) {
          console.log(`数据添加失败：`, err)
        } else {
          console.log(`跟新数据成功`)
        }
        res()
      })
    })
  }
}

const d = new Database()
d.client('test', 'coll')
.then(() => {

})
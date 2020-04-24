const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://127.0.0.1:27017'

class Database {
  constructor (url) {
    this.url = url
    this.db = null
    this.collection = null
    this.client = null
  }

  // 连接数据库
  async connect (db, collection) {
   
    let client = this.client
    if (client) return 

    // 创建客户端实例 
    client = new MongoClient(this.url, {
      useUnifiedTopology: true
    })
    
    // 链接服务器
    await new Promise((res, rej)=> {
      client.connect(err => {
        if (err) return rej(`数据库连接失败：${err.message}`)
        console.log('数据库连接成功')
        res()
      })
    })

    if (client && db) this.db = client.db(db)
    if (client && collection) this.collection = client.db(db).collection(collection)
    this.client = client
    return client
  }

  // 添加数据
  async insert(doc) {
    if (this.client === null) return console.log('增加数据失败: 数据库未链接')
    if (!Array.isArray(doc)) doc = [doc]
    return new Promise(res => {
      this.collection.insertMany(doc, (err, { result }) =>　{
        if (!err) {
          console.log(`添加 ${result.n} 条数据, 成功 ${result.ok} 条`)
          return res()
        }
  
        console.log(err)
        res()
      })
    })
  }

  // 查询数据
  async find(query, limit = 0) {
    if (this.client === null) return console.log("数据库未链接")

    try {
      const docs = await this.collection.find(query).limit(limit).toArray()

      console.log(`共查询到${docs.length}条数据`)
      return docs
    } catch(e) {
      throw new Error(`数据查询失败： ${e.message}`)
    }
  }

  // 更新数据
  async updateOne(query, rule, upsert = false) {
    if (this.client === null) return console.log("数据库未链接")
    return new Promise((res, rej) => {
      this.collection.updateOne(query, rule, { upsert }, (err, { result }) => {
        if (err) return rej(`数据更新出错：${err.message}`)
        console.log(`匹配数据 ${result.n} 条，修改 ${result.nModified} 条， 成功 ${result.ok} 条`)
        res()
      })
    })
  }

  // 关闭与数据库连接
  close() {
    this.client.close()
    this.client = null
    console.log('已关闭与数据库的链接')
  }
}

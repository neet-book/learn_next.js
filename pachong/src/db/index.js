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

   
  // 关闭与数据库连接
  close() {
    this.client.close()
    this.client = null
    console.log('已关闭与数据库的链接')
  }
}



async function st() {
  const db  = new Database(url)
  await db.connect('test', 'coll')
  // await db.updataOne({
  //   name: 'li'
  // }, {
  //   $set: {
  //     name: 'ok'
  //   }
  // })
  const data = await db.find()
  database.close()
  console.log(data)
}


st().catch(e => {
  console.log(e)
})
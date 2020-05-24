const Database = require('../db/index.js')

start().catch(e => console.log(e))

async function start() {
  const dbUrl = ' mongodb://127.0.0.1:27017/'
  const db = await new Database(dbUrl).connect('meituan', 'minshu')
  let data = db.find({}, 1)
  db.client.db('test')
  db.coll('minshu')
  db.insert(data)
}

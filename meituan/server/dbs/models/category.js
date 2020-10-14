const { mongoose } = require('mongoose')
const { Schema } = mongoose
// 推荐项schima
const CateSchema = new Schema({
    id: { type: Number },
    name: { type: String },
    url:  { type: String },
    pinyin: { type: String}
})

// 推荐文档schema
const CategorySchema = new Schema({
    leftCasteList: [CateSchema],
    rightCateList: [[CateSchema]]
})

module.exports = mongoose.module('categoryes', CategorySchema)
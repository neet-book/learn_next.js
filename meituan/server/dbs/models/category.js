const { Schema } = require('mongoose')

const CateSchema = new Schema({
    id: { type: Number },
    name: { type: String },
    url:  { type: String },
    pinyin: { type: String}
})


const CategorySchema = new Schema({
    leftCasteList: [CateSchema],
    rightCateList: [[CateSchema]]
})
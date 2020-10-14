import mongoose from 'mongoose'
const { Schema } = mongoose

const RecommendSchema = new Schema({
    itemId: String,
    title: String,
    imgUrl: String,
    score: String,
    consumeNum: String,
    areaName: String,
    lowPrice: String,
    saleNum: Number,
    // 赞数
    commentNum: Number,
    detailUrl: String,
    firstCate: [Number],
    // 人均价格
    avgPrice: Number,
    imgSrc: String
})

module.exports = mongoose.module('recommend', RecommendSchema)
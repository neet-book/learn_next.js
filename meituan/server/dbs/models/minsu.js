const { Schema } = require('mongoose')
// 民宿子文档Schema
const MinsuSubSchema = new Schema({
    productId: { type: String },
    price: { type: Number },
    hostAvatarUrl: { type: String },
    title: { type: String },
    rentType: { type: Number },
    layoutRoom: { type: Number },
    maxGuestNumber: { type: Number },
    locationArea: { type: String },
    starRating: { type: Number },
    commentNumber: { type: Number },
    coverImage: { type: String },
    favCount: { type: Number },
    poiId: { type: String },
    dpPoiId: { type: String },
    imgSrc: { type: String },
})

// 民宿Schema
const MinsuSchema = new Schema({
    cityId: {
        type: Number,
        required: true
    },
    minsu: [MinsuSubSchema]
})

module.exports = mongoose.module('minsu', MinsuSchema)
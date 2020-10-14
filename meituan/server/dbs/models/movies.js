const { mongoose } = require('mongoose')
const { Schema } = mongoose

const MovieSchema = new Schema({
    id: Number,
    bingeWatch: Number,
    // 展示信息
    boxInfo: String,
    // 分类
    cat: String,
    civilPubSt: Number,
    comingTitle: String,
    // 描述
    desc: String,
    // 主演
    dir: String,
    dur: Number,
    effectShowNum: Number,
    followst: Number,
    globalReleased: Boolean,
    haspromotionTag: Boolean,
    headLineShow: Boolean,
    headLinesVO: [String],
    img: String,
    isRevival: Boolean,
    late: Boolean,
    localPubSt: Number,
    mark: Boolean,
    mk: Number,
    movieType: Number,
    nm: String,
    pn: Number,
    preShow: Boolean,
    proScore: Number,
    proScoreNum: Number,
    pubDate: Number,
    pubDesc: String,
    pubShowNum: Number,
    recentShowDate: Number,
    recentShowNum: Number,
    rt: String,
    sc: Number,
    scm: String,
    scoreLabel: String,
    showCinemaNum: Number,
    showNum: Number,
    showst: Number,
    snum: Number,
    star: String,
    ver: String,
    videoId: Number,
    // 电影名
    videoName: String,
    // 电影片段url
    videourl: String,
    vnum: Number,
    vodPlay: Boolean,
    weight: Number,
    wish: Number,
    wishst: Number,
    imgSrc: String
})

module.exports = mongoose.module('movie', MovieSchema)
const { mongoose } = require('mongoose')
const { mode } = require('~/nuxt.config')
const { Schema } = mongoose

const CitySchema = new Schema({
    cityId: Number,
    cityName: String
})

module.exports = mongoose.module('cites', CitySchema)
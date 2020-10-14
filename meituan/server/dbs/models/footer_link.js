import mongoose from 'mongoose'
const { Schema } = mongoose

const LinkSchema = new Schema({
    column_id: Number,
    text: String,
    href: String
})

const  LinksSchema = new Schema({
    column_id: Number,
    title: String,
    links: [ LinkSchema]
})

module.exports = mongoose.module('footer_link', LinksSchema)
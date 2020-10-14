import mongoose from 'mongoose'
const { Schema } = mongoose

const ItemSchema = new Schema({
    c_id: Number,
    index: String,
    href: String,
    text: String
})

const NavSchema = new Schema({
    c_id: Number,
    title: String,
    items: [ItemSchema]
})

module.exports = mongoose.module('bottom_nav', NavSchema)
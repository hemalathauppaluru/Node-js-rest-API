const mongoose = require('mongoose');
const { Schema } = mongoose;
const metaSchema = new Schema({
    votes:Number,
    favs:Number,
} )
const commentSchema = new Schema( {
    body: String,
    date: { type: Date, default: Date.now }
} )
const blogSchema = new Schema( {
    title: String,
    author: String,
    body: String,
    comments: [commentSchema],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: metaSchema,
} )

mongoose.exports = mongoose.model('blog',blogSchema)
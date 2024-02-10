const mongoose = require('mongoose');
const { Schema} = mongoose;

const postSchema = new mongoose.Schema ({
    title: String,
    summary: String,
    content: String,
    cover:String,
    author: {type:Schema.Types.ObjectId, ref:'User'},
}, {
    timestamps: true,
}
);

const PostModel = mongoose.model('Post', postSchema)
module.exports = PostModel;
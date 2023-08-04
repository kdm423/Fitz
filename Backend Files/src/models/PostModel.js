import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    }
});

const postSchema = mongoose.Schema({
    username: String,
    image: String,
    caption: String,
    comments: [commentSchema],
    status: String,
});

const PostModel = mongoose.model("Posts", postSchema);

export { PostModel };
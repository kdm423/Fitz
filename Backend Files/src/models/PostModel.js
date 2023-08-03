import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    username: String,
    image: String,
    caption: String,
    comments: Array,
    status: String,
});

const PostModel = mongoose.model("Posts", postSchema);

export { PostModel };
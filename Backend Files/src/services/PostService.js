import { PostModel } from "../models/PostModel.js";

    // Adds post to DB
    const createPost = async (username, image, caption, comments, status) => {
        try {
            let postDoc = new PostModel({
                username: username,
                image: image,
                caption: caption,
                comments: comments,
                status: "Active",
            });
        
            const result = await postDoc.save();
        
            console.log("createPost method", result);

            return result;
        } catch (error) {
            console.error("error saving the post to the database:", error);
            throw error;
        }
    };

    // Gets all posts from DB
    const getPosts = async () => {
        const data = await PostModel.find();
    
        console.log("data", data);
    
        return data;
    };

    // Gets post created by a specific user from DB
    const getUserPosts = async (usernameKey) => {
        const data = await PostModel.find({ username : usernameKey });

        //console.log("data", data);

        return data;
    };

    
    // Get specific post by ID
    const getPostById = async (postID) => {
        try {
          const post = await PostModel.findOne({ _id: postID });
          return post;
        } catch (error) {
          throw new Error("Error fetching post data: " + error.message);
        }
      };

    // Hard delete from DB
    const deletePost = async (id) => {
        try {
            const post = await PostModel.findOne({ _id: id });
    
            if(!post) {
                throw new Error("post not found");
            }
        
            await PostModel.deleteOne({ _id: id });
        
            return { message: "post successfully deleted" };
        } catch (error) {
            throw new Error("error deleting post: " + error.message);
        }
    };

    // Adds comment by updating post
    const addComment = async (id, newComment, username) => {
        try {
            const post = await PostModel.findOne({ _id: id });
        
            if(!post) {
                throw new Error("post not found");
            }
            
            post.comments.push({ text: newComment, username });

            const updatedPost = await post.save();
            
            return updatedPost;
        } catch (error) {
            throw new Error("error adding comment: " + error.message);
        }
    };

export { createPost, getPosts, getUserPosts, getPostById, deletePost, addComment };

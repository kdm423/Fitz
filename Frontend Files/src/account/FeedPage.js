import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FeedPage = ({ username, onLogout }) => {
    const [posts, setPosts] = useState([]);
    const [comment, setComment] = useState('');

    const navigate = useNavigate();

    const getAllPosts = async () => {
        try {
            const response = await axios.get('http://localhost:4000/getAllPosts');
            setPosts(response.data.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const handleLogout = () => {
    onLogout();
    navigate('/');
    };

    const handleCommentAdd = async (postID, newComment) => {
        try {
            await axios.put('http://localhost:4000/addComment', { id: postID, comments: newComment, username });
            alert('Your comment was successfully added');
            setComment('');
            getAllPosts('');
        } catch (error) {
            console.error('error adding comment: ', error);
            alert('Error adding comment. Please try again.');
        }
    };

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        <h2>Feed Page</h2>
        {posts.map((post) => (
            <div key={post._id}>
                <p>{post.username}</p>
                <img src={post.image} alt="Post" />
                <p>{post.caption}</p>
                <ul>
                {post.comments.map((postComment, index) => (
                <li key={index}>
                    {postComment.username}: {postComment.text}
                </li>
                ))}
                </ul>
                <input
                    type="text"
                    placeholder="..."
                    value={comment}
                    onChange={(event => setComment(event.target.value))}
                />
                <button onClick={() => handleCommentAdd(post._id, comment)}>Add Comment</button>
            </div>
        ))}
        </div>
    );
};

export default FeedPage;

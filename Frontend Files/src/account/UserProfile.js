import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserProfile = ({ username, onLogout }) => {
    const [showButton, setShowButton] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState('');
    const [userPosts, setUserPosts] = useState([]);
    const [comment, setComment] = useState('');

    const navigate = useNavigate();

    // Shows form to create a new post
    // Hides "Create New Post" button
    const handleButtonClick = () => {
        setShowButton(false);
        setShowForm(true);
    };

    const handlePostSubmit = async (event) => {
        event.preventDefault();

        const postData = {
            username: username,
            image: image,
            caption: caption,
            comments: [],
            status: "Active",
        };

        try {
            await axios.post('http://localhost:4000/createPost', postData);
            alert('Your post was successfully created.');
        } catch (error) {
            console.error('error creating post: ', error);
            alert('Error creating post. Please try again.');
        }
        setCaption('');
        setImage('');
        getUserPosts();
    };
    
    const handleCommentAdd = async (postID, newComment) => {
        try {
            await axios.put('http://localhost:4000/addComment', { id: postID, comments: newComment, username });
            alert('Your comment was successfully added');
            setComment('');
            getUserPosts('');
        } catch (error) {
            console.error('error adding comment: ', error);
            alert('Error adding comment. Please try again.');
        }
    };

    const getUserPosts = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:4000/getUserPosts?username=${username}`);
            setUserPosts(response.data.data);
        } catch (error) {
            console.error('error fetching user posts: ', error);
        }
    }, [username]);

    const handleLogout = () => {
        onLogout();
        navigate('/');
    };

    useEffect(() => {
        if (username) {
            setShowButton(true);
            setShowForm(false);

            getUserPosts();
        }

    }, [username, getUserPosts]);

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>

            <br />

            Hello {username}

            <br />

            {showButton && <button onClick={handleButtonClick}>Create New Post</button>}

            {showForm && (
                <div>
                    <input
                        type="text"
                        placeholder="Enter caption"
                        value={caption}
                        onChange={(event) => setCaption(event.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter Image URL"
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
                    />
                    <button onClick={handlePostSubmit}>Create Post</button>
                </div>
            )}

            {userPosts.length > 0 && (
                <div>
                    <h2>User Posts</h2>
                    <ul>
                        {userPosts.map((post) => (
                            <li key={post._id}>
                            <p>{post.username}</p>
                            <img src={post.image} alt="Post" />
                            <p>{post.caption}</p>
                            {post.comments && post.comments.length > 0 && (
                            <ul>
                                {post.comments.map((postComment, index) => (
                                    <li key={index}>
                                        {postComment.username}:
                                        {postComment.text}
                                    </li>
                                ))}
                            </ul>
                            )}
                            <input
                                type="text"
                                placeholder="..."
                                value={comment}
                                onChange={(event => setComment(event.target.value))}
                            />
                            <button onClick={() => handleCommentAdd(post._id, comment)}>Add Comment</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserProfile;

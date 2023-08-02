import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserProfile = ({ username, onLogout }) => {
    const [showButton, setShowButton] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState('');
    const [userPosts, setUserPosts] = useState([]);

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
    };

    const getUserPosts = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/getUserPosts?username=${username}`);
            setUserPosts(response.data.data);
        } catch (error) {
            console.error('error fetching user posts: ', error);
        }
    };

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [username]);

    return (
        <div>
            Hello {username}

            <br />

            {showButton && <button onClick={handleButtonClick}>Create New Post</button>}

            <button onClick={handleLogout}>Logout</button>

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
                                </li>
                            ))}
                        </ul>
                </div>
            )}
        </div>
    );
};

export default UserProfile;

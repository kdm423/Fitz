import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Contest = ({ username, onLogout }) => {
    const [contests, setContests] = useState([]);
    const [postInfo, setPostInfo] = useState({});
    const [newContestName, setNewContestName] = useState('');
    const [newContestActivity, setNewContestActivity] = useState('');

    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/');
    };

    const getAllContests = async () => {
        try {
        const response = await axios.get('http://localhost:4000/getAllContests');
        setContests(response.data.data);
  
        let postIDs = [];
        for (const contest of response.data.data) {
            for (const entry of contest.entryIDList) {
                postIDs.push(entry.postID);
            }
        } 
  
        const postPromises = postIDs.map((postID) => getPostInfo(postID));
        const postInfoList = await Promise.all(postPromises);
        const postInfoMap = {};

        for (let i = 0; i < postIDs.length; i++) {
            const postID = postIDs[i];
            const postInfo = postInfoList[i];
            if (postInfo) {
                postInfoMap[postID] = postInfo;
            }
        }
  
        setPostInfo(postInfoMap);

        } catch (error) {
        console.error('Error getting contests:', error);
        }
    };

    const handleCreateContest = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:4000/createContest', {
            contestName: newContestName,
            contestActivity: newContestActivity,
        });

        setNewContestName('');
        setNewContestActivity('');
        getAllContests();

    } catch (error) {
      console.error('Error creating contest:', error);
    }
  };

    const getPostInfo = async (postID) => {
        try {
            const response = await axios.get(`http://localhost:4000/getPostByID?id=${postID}`);
            return response.data;
        } catch (error) {
            console.error('Error getting post information:', error);
            return null;
        }
    };

    useEffect(() => {
        getAllContests();
    }, []);

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
            <h2>Contests</h2>
            <form onSubmit={handleCreateContest}>
            <label>
                Contest Name:
                <input
                    type="text"
                    value={newContestName}
                    onChange={(e) => setNewContestName(e.target.value)}
                />
            </label>
            <label>
                Contest Activity:
                <input
                    type="text"
                    value={newContestActivity}
                    onChange={(e) => setNewContestActivity(e.target.value)}
                />
            </label>
            <button type="submit">Create Contest</button>
            </form>
            {contests.map((contest) => (
                <div key={contest._id}>
                <h3>{contest.contestName}</h3>
                <h4>Posts in this contest:</h4>
                {contest.entryIDList.length === 0 ? (
                    <p>No posts in this contest yet.</p>
                ) : (
                    contest.entryIDList.map((entry) => {
                    const postInfoItem = postInfo[entry.postID];
                    return (
                        <div key={entry.postID}>
                            {postInfoItem ? (
                        <>
                            <img src={postInfoItem.image} alt="Post" style={{ maxWidth: '100%' }} />
                            <p>{postInfoItem.username}: {postInfoItem.caption}</p>
                            <h6>Comments:</h6>
                            {postInfoItem.comments.map((comment, index) => (
                                <p key={index}>{comment.text} - {comment.username}</p>
                            ))}
                        </>
                            ) : (
                                <p>Loading post information...</p>
                            )}
                        </div>
                    )})
                )}
                </div>
            ))}
        </div>
  );
};

export default Contest;

import React, { useState } from 'react';
import Login from "./Login.js";
import UserProfile from './UserProfile.js';
import FeedPage from './FeedPage.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState(null);

    const handleLogin  = ({ username }) => {
        setIsLoggedIn(true);
        setUsername(username);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername(null);
    };

    return (
        <Router>
            <div>
                {isLoggedIn ? (
                <>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">User Profile</Link>
                        </li>
                        <li>
                            <Link to="/feed">Go to Feed</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route
                        path="/"
                        element={
                    <UserProfile username={username} onLogout={handleLogout} />
                        }
                    />
                    <Route path="/feed" element={<FeedPage username={username} onLogout={handleLogout} />} />
                </Routes>
                </>
                ) : (
                <Routes>
                    <Route path="/" element={<Login onLogin={handleLogin} />} />
                </Routes>
                )}
            </div>
        </Router>
        );
    }

export default App;

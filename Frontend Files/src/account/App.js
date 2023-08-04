import React, { useState } from 'react';
import Login from "./Login.js";
import UserProfile from './UserProfile.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
          <UserProfile username={username} onLogout={handleLogout} />
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

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import TaskList from './components/TaskList';
import ProtectedPage from './components/ProtectedPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login onLogin={() => setLoggedIn(true)} />} />
        

        <Route
          path="/protected"
          element={
            <PrivateRoute>
              <div>
                <h1>Task Manager</h1>
                <button onClick={handleLogout}>Logout</button>
                <ProtectedPage />
              </div>
            </PrivateRoute>
          }
        />

        {/* Redirect root path based on login */}
        <Route path="/" element={loggedIn ? <Navigate to="/tasks" /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

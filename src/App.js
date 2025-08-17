import React, { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import TaskList from './components/TaskList';

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      {!loggedIn ? (
        <>
          <Signup />
          <Login onLogin={() => setLoggedIn(true)} />
        </>
      ) : (
        <>
          <button onClick={handleLogout}>Logout</button>
          <TaskList />
        </>
      )}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from 'react';
import api from '../api';
import TaskForm from './TaskForm';

function TaskList({ onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [taskDetails, setTaskDetails] = useState(null); // store task details to show

  const fetchTasks = async () => {
    try {
      const res = await api.get('/tasks');
      setTasks(res.data);
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to fetch tasks');
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (err) {
      alert(err.response?.data?.message || 'Delete failed');
    }
  };

  const handleEdit = (task) => setTaskToEdit(task);

  const handleToggleCompleted = async (task) => {
    try {
      const updated = await api.put(`/tasks/${task._id}`, { completed: !task.completed });
      setTasks(tasks.map(t => (t._id === task._id ? updated.data : t)));
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update task');
    }
  };

  // View task details
  const handleView = async (id) => {
    try {
      const res = await api.get(`/tasks/${id}`);
      setTaskDetails(res.data); // store task details to show below the title
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to fetch task details');
    }
  };

  const handleFinish = () => {
    setTaskToEdit(null);
    fetchTasks();
  };

  useEffect(() => { fetchTasks(); }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h1>Task Manager</h1>
        <button onClick={onLogout}>Logout</button>
      </header>

      <TaskForm taskToEdit={taskToEdit} onFinish={handleFinish} />

      <h3 style={{ marginTop: '30px' }}>Your Tasks</h3>

      <div>
        {tasks.map(task => (
          <div
            key={task._id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '10px',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '5px'
            }}
          >
            {/* Only show task title in the list */}
            <span><b>{task.title}</b></span>

            {/* Buttons */}
            <div style={{ marginTop: '5px' }}>
              <button onClick={() => handleToggleCompleted(task)}>
                {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
              </button>
              <button onClick={() => handleEdit(task)}>Edit</button>
              <button onClick={() => handleDelete(task._id)}>Delete</button>
              <button onClick={() => handleView(task._id)}>View Details</button>
            </div>

            {/* Show description + status only if this task is selected */}
            {taskDetails && taskDetails._id === task._id && (
              <div style={{ marginTop: '10px', backgroundColor: '#f9f9f9', padding: '5px', borderRadius: '3px' }}>
                <p><b>Description:</b> {taskDetails.description || 'No description'}</p>
                <p><b>Completed:</b> {taskDetails.completed ? '✅' : '❌'}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;

import React, { useState, useEffect } from 'react';
import api from '../api';

function TaskForm({ taskToEdit, onFinish }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = async () => {
    if (title.length < 3) {
      setError('Title must be at least 3 characters.');
      return;
    }

    try {
      if (taskToEdit) {
        // Update existing task
        await api.put(`/tasks/${taskToEdit._id}`, { title, description });
      } else {
        // Create new task
        await api.post('/tasks', { title, description });
      }
      setTitle('');
      setDescription('');
      setError('');
      onFinish(); // Refresh task list
    } catch (err) {
      setError(err.response?.data?.message || 'Error saving task');
    }
  };

  return (
    <div>
      <h3>{taskToEdit ? 'Update Task' : 'Create Task'}</h3>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      /><br />
      <button onClick={handleSubmit}>{taskToEdit ? 'Update' : 'Create'}</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default TaskForm;

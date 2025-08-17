import React, { useEffect, useState } from 'react';
import api from '../api';

function ProtectedPage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/auth/protected');
        setMessage(res.data.message);
      } catch (err) {
        setMessage(err.response?.data?.message || 'Access denied');
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Protected Page</h2>
      <p>{message}</p>
    </div>
  );
}

export default ProtectedPage;

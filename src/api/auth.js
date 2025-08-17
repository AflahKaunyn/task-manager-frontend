import api from './api';

export const signupUser = async (name, email, password) => {
  try {
    const response = await api.post('/auth/signup', { name, email, password }); // correct path
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Signup failed:', error.response?.data?.message || error.message);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password }); // correct path
    console.log(response.data);
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    console.error('Login failed:', error.response?.data?.message || error.message);
    throw error;
  }
};

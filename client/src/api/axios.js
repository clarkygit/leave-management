import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5173/api', // adjust this to match your backend route prefix
  withCredentials: true, // optional, only needed if you're dealing with cookies/session auth
});

export default api;
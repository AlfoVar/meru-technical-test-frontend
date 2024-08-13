import axios from 'axios';

console.log('API URL:', process.env.URL_API_RAILS); 

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
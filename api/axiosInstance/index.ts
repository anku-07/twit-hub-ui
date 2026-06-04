import axios from 'axios';

const axiosInstanse = axios.create({
  baseURL: 'http://localhost:4500/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstanse.interceptors.request.use(config => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default axiosInstanse;

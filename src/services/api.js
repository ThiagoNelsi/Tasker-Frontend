import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('token')}
});

export default api;
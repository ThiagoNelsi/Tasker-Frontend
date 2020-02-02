import axios from 'axios';

const api = axios.create({
  baseURL: 'https://taskser-backend.herokuapp.com/',
  headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
});

export default api;
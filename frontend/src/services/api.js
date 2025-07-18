import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000", // ← usado no ambiente local
});

export default api;

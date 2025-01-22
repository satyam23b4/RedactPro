import axios from 'axios';

// Set your backend URL here (Flask server running locally)
const instance = axios.create({
  baseURL: 'http://localhost:5001', // Flask server URL
});

export default instance;

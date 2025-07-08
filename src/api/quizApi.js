import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; 

export const fetchQuizzes = () => {
  return axios.get(`${API_BASE_URL}/quizzes`);
};

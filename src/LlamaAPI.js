import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const getFeedData = function () {
  return axios.get(`${API_URL}/feeds`);
};

export { getFeedData };

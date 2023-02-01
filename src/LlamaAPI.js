import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const getFeedData = function () {
  return axios.get(`${API_URL}/feeds`);
};

const getEntriesForFeed = function (feedID) {
  return axios.get(`${API_URL}/${feedID}/entries`);
};

export { getFeedData, getEntriesForFeed };

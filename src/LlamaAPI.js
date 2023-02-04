import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const getFeedData = function () {
  return axios.get(`${API_URL}/feeds`);
};

const getEntriesForFeed = function (feedID) {
  return axios.get(`${API_URL}/${feedID}/entries`);
};

const requestRefresh = function () {
  return axios.get(`${API_URL}/refresh`);
};

const markFeedRead = function (feedID) {
  return axios.patch(`${API_URL}/${feedID}/read`);
};

const addFeed = function (sourceURL) {
  const formData = { feed_source: sourceURL };
  return axios.post(`${API_URL}/feeds/add`, formData);
};

export {
  getFeedData,
  getEntriesForFeed,
  requestRefresh,
  markFeedRead,
  addFeed,
};

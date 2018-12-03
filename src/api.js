import axios from 'axios';
const request = require('request');

const BASE_URL = 'https://frozen-river-28585.herokuapp.com/api';

export const getInfo = async infoType => {
  const { data } = await axios.get(`${BASE_URL}/${infoType}`);
  return data;
};

export const changeVotes = async (url, upOrDown) => {
  const { data } = await axios.patch(`${BASE_URL}/${url}?vote=${upOrDown}`);
  return data;
};

export const addInfo = async (url, body) => {
  const { data } = await axios.post(`${BASE_URL}/${url}`, body);
  return data;
};

export const apiDeleteComment = async url => {
  const { data } = await axios.delete(`${BASE_URL}/${url}`);
  return data;
};

export const checkImage = async url => {
  console.log('URL', url);
  let imageFound = '';
  return axios
    .get(url)
    .then(info => console.log(info))
    .catch(err => console.log(err));
};

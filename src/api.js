import axios from 'axios';

const BASE_URL = 'https://frozen-river-28585.herokuapp.com/api';

// export const getTopics = async () => {
//   const { data } = await axios.get(`${BASE_URL}/topics`);
//   return data;
// };

export const getInfo = async infoType => {
  const { data } = await axios.get(`${BASE_URL}/${infoType}`);
  return data;
};

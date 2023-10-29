import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const apiKey = '40246120-635cf6b51d07f62c2e22f19b9';

export const fetchPics = async params => {
  const { data } = await axios.get('', {
    params: {
      key: apiKey,
      ...params,
    },
  });
  return data;
};

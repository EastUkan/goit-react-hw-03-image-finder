import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '20017107-2452682bd85dae6d03848b3b1';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const apiService = async (q, page) => {
  try {
    const { data } = await axios.get('', { params: { q, page } });
    return data.hits;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export default apiService;

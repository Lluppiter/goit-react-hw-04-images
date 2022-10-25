import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29872901-4e143f668c6284d5f724066ff';

export const fetchApi = (page, request) => {
  return axios(
    `?key=${API_KEY}&q=${request}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
};

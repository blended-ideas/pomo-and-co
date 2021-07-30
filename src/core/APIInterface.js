import axios from 'axios';

const baseURL = 'https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/';

export default function apiInterface(url, data, method) {
  return axios.request({
    method: method || 'get',
    baseURL,
    url,
    data,
  }).then((response) => response.data);
}

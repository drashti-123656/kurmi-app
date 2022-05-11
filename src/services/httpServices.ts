import {create} from 'apisauce';

const apiClient = create({
  baseURL: 'https://kurmishadi.managesmm.club/public/',
  headers: {Accept: 'application/vnd.github.v3+json'},
});

export default apiClient;

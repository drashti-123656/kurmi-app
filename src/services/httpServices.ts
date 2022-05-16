import {create} from 'apisauce';

export const apiClient = create({
  baseURL: 'https://kurmishadi.managesmm.club/public/',
  headers: {Accept: 'application/vnd.github.v3+json'},
});

export const base_URL= 'https://kurmishadi.managesmm.club/public/';
export default apiClient;

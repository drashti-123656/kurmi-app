import {create} from 'apisauce';

export const apiClient = create({
  baseURL: 'https://kurmishadi.com/api/public/',
  headers: {Accept: 'application/vnd.github.v3+json'},
});

export function setToken(token: string) {
  apiClient.setHeaders({
    Authorization: `Bearer ${token}`,
  });
  console.log('token : ' + token);
}

export const base_URL = 'https://kurmishadi.com/api/public/';
export default apiClient;

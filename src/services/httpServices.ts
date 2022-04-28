import { create } from 'apisauce'

const api = create({
  baseURL: 'https://kurmishadi.managesmm.club/public/',
  headers: { Accept: 'application/vnd.github.v3+json' },
})

export default api
import axios from 'axios'

// base url to make requests to crypto api
const instance = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
})

export default instance

import axios from 'axios'

const baseURL = process.env.REACT_APP_BACKEND_URL
console.log('baseurl', baseURL)
let headers = {}

if (localStorage.token) {
  headers.Authorization = `Bearer ${localStorage.token}`
}

const axiosInstance = axios.create({
  baseURL,
  headers,
})

export default axiosInstance

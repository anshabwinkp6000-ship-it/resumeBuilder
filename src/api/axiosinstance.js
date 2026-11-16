import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://rbuilder-qdrm.onrender.com',
  timeout: 60000
})

// response interceptor: handles common errors in one place
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status

      if (status === 401) {
        console.log('Un-Authorized')
      } else if (status === 404) {
        console.log('API not found')
      } else if (status === 500) {
        console.log('Server error')
      } else {
        console.log('Error: ' + error.message)
      }
    } else if (error.request) {
      console.log('No response from server')
    } else {
      console.log('Error: ' + error.message)
    }

    // always pass the error on so the catch blocks in your components run
    return Promise.reject(error)
  }
)

export default axiosInstance
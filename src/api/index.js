import axios from 'axios'
// import { checkExpires, manageHeaders } from 'lib/api-utils'

const LocalStore = {}

const api = axios.create({ baseURL: '/store/' })

LocalStore.request = (config) => api.request(config)

;['delete', 'get', 'head'].forEach((method) => {
  LocalStore[method] = (url, config) => LocalStore.request({ ...config, method, url })
})

;['post', 'put', 'patch'].forEach((method) => {
  LocalStore[method] = (url, data, config) => LocalStore.request({ ...config, method, url, data })
})

export default LocalStore
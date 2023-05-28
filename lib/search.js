const axios = require('axios');
const baseUrl = 'https://wibu-api.eu.org/'

module.exports.GOOGLE = async(query) => {
  return new Promise(async(resolve, reject) => {
    axios.get(baseUrl + 'api/google/search?query=' + query)
    .then(data => {
      resolve(data.data)
    })
    .catch(error => {
      reject(error)
    })
  })
}
module.exports.LK21 = async(query) => {
  return new Promise(async(resolve, reject) => {
    axios.get(baseUrl + 'api/lk21/search?query=' + query)
    .then(data => {
      resolve(data.data)
    })
    .catch(error => {
      reject(error)
    })
  })
}
module.exports.SUKIDESUOST = async(query, page) => {
  return new Promise(async(resolve, reject) => {
    axios.get(baseUrl + 'api/music/sukidesuost/search?query=' + query + '&page=' + page)
    .then(data => {
      resolve(data.data)
    })
    .catch(error => {
      reject(error)
    })
  })
}
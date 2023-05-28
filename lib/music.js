const axios = require('axios');
const baseUrl = 'https://wibu-api.eu.org/'

module.exports.SUKIDESUOST = async(url) => {
  return new Promise(async(resolve, reject) => {
    if (url == null) {
      url = ''
    }
    axios.get(baseUrl + 'api/music/sukidesuost?link=' + url)
    .then(data => {
      resolve(data.data)
    })
    .catch(error => {
      reject(error)
    })
  })
}
module.exports.HIKARINOAKARI = async(url) => {
  return new Promise(async(resolve, reject) => {
    if (url == null) {
      url = ''
    }
    axios.get(baseUrl + 'api/music/hikarinoakari?link=' + url)
    .then(data => {
      resolve(data.data)
    })
    .catch(error => {
      reject(error)
    })
  })
}
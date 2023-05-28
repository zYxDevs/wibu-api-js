const axios = require('axios');
const baseUrl = 'https://wibu-api.eu.org/'

module.exports.WIBUSUBS = async(url) => {
  return new Promise(async(resolve, reject) => {
    if (url == null) {
      url = ''
    }
    axios.get(baseUrl + 'api/drama/wibusubs?link=' + url)
    .then(data => {
      resolve(data.data)
    })
    .catch(error => {
      reject(error)
    })
  })
}
const axios = require('axios');
const baseUrl = 'https://wibu-api.eu.org/'

module.exports.JAV = async() => {
  return new Promise(async(resolve, reject) => {
    if (url == null) {
      url = ''
    }
    axios.get(baseUrl + 'api/game/gi/jav')
    .then(data => {
      resolve(data.data)
    })
    .catch(error => {
      reject(error)
    })
  })
}
module.exports.GIF = async() => {
  return new Promise(async(resolve, reject) => {
    if (url == null) {
      url = ''
    }
    axios.get(baseUrl + 'api/game/gi/GIF')
    .then(data => {
      resolve(data.data)
    })
    .catch(error => {
      reject(error)
    })
  })
}
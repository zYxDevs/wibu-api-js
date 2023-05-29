const axios = require('axios');
const baseUrl = 'https://wibu-api.eu.org/'

module.exports.NSFW = async(endpoint) => {
  return new Promise(async(resolve, reject) => {
    var endpoint_list = ['RB', 'GB']
    if (!endpoint_list.includes(endpoint.toUpperCase())) {
      reject({
        message: 'No endpoint given!',
        success: false,
        creator: 'Yoga Pranata'
      })
    } else {
      await axios.get(baseUrl + 'api/booru/nsfw/' + endpoint.toLowerCase())
      .then(data => {
        resolve(data.data)
      })
      .catch(error => {
        reject('p')
      })
    }
  })
}
module.exports.SFW = async(endpoint) => {
  return new Promise(async(resolve, reject) => {
    var endpoint_list = ['SB', 'GB']
    if (!endpoint_list.includes(endpoint.toUpperCase())) {
      reject({
        message: 'No endpoint given!',
        success: false,
        creator: 'Yoga Pranata'
      })
    } else {
      await axios.get(baseUrl + 'api/booru/sfw/' + endpoint.toLowerCase())
      .then(data => {
        resolve(data.data)
      })
      .catch(error => {
        reject('p')
      })
    }
  })
}
const axios = require('axios');
const baseUrl = 'https://wibu-api.eu.org/'

module.exports.NSFW = async(endpoint) => {
  return new Promise(async(resolve, reject) => {
    var endpoint_list = ['AHAGAO', 'WAIFU', 'NEKO', 'TRAP', 'BJ']
    if (!endpoint_list.includes(endpoint.toUpperCase())) {
      reject({
        message: 'No endpoint given!',
        success: false,
        creator: 'Yoga Pranata'
      })
    } else {
      await axios.get(baseUrl + 'api/anime/nsfw/' + endpoint.toLowerCase())
      .then(data => {
        resolve(data.data)
      })
      .catch(error => {
        reject('p')
      })
    }
  })
}
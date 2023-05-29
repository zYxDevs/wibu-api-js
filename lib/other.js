const axios = require('axios');
const baseUrl = 'https://wibu-api.eu.org/'

module.exports.GSM_SEARCH = async(query) => {
  return new Promise(async(resolve, reject) => {
    if (url == null) {
      url = ''
    }
    axios.get(baseUrl + 'api/etc/gsm/search?query=' + query)
    .then(data => {
      resolve(data.data)
    })
    .catch(error => {
      reject(error)
    })
  })
}
module.exports.GSM_SLUG = async(query) => {
  return new Promise(async(resolve, reject) => {
    if (url == null) {
      url = ''
    }
    axios.get(baseUrl + 'api/etc/gsm/slug?query=' + query)
    .then(data => {
      resolve(data.data)
    })
    .catch(error => {
      reject(error)
    })
  })
}
module.exports.YOUTUBE = async(url) => {
  return new Promise(async(resolve, reject) => {
    if (url == null) {
      url = ''
    }
    axios.get(baseUrl + 'api/etc/youtube?url=' + url)
    .then(data => {
      resolve(data.data)
    })
    .catch(error => {
      reject(error)
    })
  })
}
module.exports.FACEBOOK = async(url) => {
  return new Promise(async(resolve, reject) => {
    if (url == null) {
      url = ''
    }
    axios.get(baseUrl + 'api/etc/facebook?url=' + url)
    .then(data => {
      resolve(data.data)
    })
    .catch(error => {
      reject(error)
    })
  })
}
module.exports.UD = async(query) => {
  return new Promise(async(resolve, reject) => {
    if (url == null) {
      url = ''
    }
    axios.get(baseUrl + 'api/etc/ud?query=' + query)
    .then(data => {
      resolve(data.data)
    })
    .catch(error => {
      reject(error)
    })
  })
}
module.exports.ENCODE_BASE64 = async(query) => {
  return new Promise(async(resolve, reject) => {
    if (url == null) {
      url = ''
    }
    axios.get(baseUrl + 'api/encode/base64?query=' + query)
    .then(data => {
      resolve(data.data)
    })
    .catch(error => {
      reject(error)
    })
  })
}
module.exports.DECODE_BASE64 = async(query) => {
  return new Promise(async(resolve, reject) => {
    if (url == null) {
      url = ''
    }
    axios.get(baseUrl + 'api/decode/base64?query=' + query)
    .then(data => {
      resolve(data.data)
    })
    .catch(error => {
      reject(error)
    })
  })
}
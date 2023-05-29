const axios = require('axios');
const baseUrl = 'https://wibu-api.eu.org/'

module.exports.GENSHIN_IMPACT_USER = async(uid) => {
  return new Promise(async(resolve, reject) => {
    if (url == null) {
      url = ''
    }
    axios.get(baseUrl + 'api/game/gi/user?uid=' + uid)
    .then(data => {
      resolve(data.data)
    })
    .catch(error => {
      reject(error)
    })
  })
}
module.exports.GENSHIN_IMPACT_CHARACTER = async(name) => {
  return new Promise(async(resolve, reject) => {
    if (url == null) {
      url = ''
    }
    axios.get(baseUrl + 'api/game/gi/character?name=' + name)
    .then(data => {
      resolve(data.data)
    })
    .catch(error => {
      reject(error)
    })
  })
}
module.exports.GENSHIN_IMPACT_ENEMY = async(name) => {
  return new Promise(async(resolve, reject) => {
    if (url == null) {
      url = ''
    }
    axios.get(baseUrl + 'api/game/gi/enemy?name=' + name)
    .then(data => {
      resolve(data.data)
    })
    .catch(error => {
      reject(error)
    })
  })
}
module.exports.GENSHIN_IMPACT_ARTIFACT = async(name) => {
  return new Promise(async(resolve, reject) => {
    if (url == null) {
      url = ''
    }
    axios.get(baseUrl + 'api/game/gi/artifact?name=' + name)
    .then(data => {
      resolve(data.data)
    })
    .catch(error => {
      reject(error)
    })
  })
}
module.exports.GENSHIN_IMPACT_ELEMENT = async(name) => {
  return new Promise(async(resolve, reject) => {
    if (url == null) {
      url = ''
    }
    axios.get(baseUrl + 'api/game/gi/element?name=' + name)
    .then(data => {
      resolve(data.data)
    })
    .catch(error => {
      reject(error)
    })
  })
}
module.exports.GENSHIN_IMPACT_WEAPON = async(name) => {
  return new Promise(async(resolve, reject) => {
    if (url == null) {
      url = ''
    }
    axios.get(baseUrl + 'api/game/gi/weapon?name=' + name)
    .then(data => {
      resolve(data.data)
    })
    .catch(error => {
      reject(error)
    })
  })
}
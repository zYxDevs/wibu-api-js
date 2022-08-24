# Wibu-API-Js
[![Repo Size](https://img.shields.io/github/repo-size/zYxDevs/wibu-api-js?style=flat-square)](https://github.com/zYxDevs/wibu-api-js)  [![Languages](https://img.shields.io/github/languages/top/zYxDevs/wibu-api-js?style=flat-square)](https://github.com/zYxDevs/wibu-api-js)  [![CodeFactor](https://www.codefactor.io/repository/github/zYxDevs/wibu-api-js/badge)](https://www.codefactor.io/repository/github/zYxDevs/wibu-api-js)

_Official Javascript Wrapper for Wibu API._

## Installation
```shell
npm install wibuapi
```
Or via yarn
```shell
yarn add wibuapi
```

## Example

```NSFW```

Available Endpoint :
* ahegao
* waifu
* neko
* trap
* bj

```javascript
const wibuapi = require('wibuapi')

const endpoint = 'neko'

wibuapi.Nsfw(endpoint)
.then(result => {
    console.log(result)
})
.catch(error => {
    console.log(error)
})
```

## LIST

| Name | Formats | Params |
| :------------: | :---------------: | :-----: |
| NSFW | Nsfw | endpoint |
| Lendrive | Lendrive | link |
| Kusonime | Kusonime | link |
| Doronime | Doronime | link |

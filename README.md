# wibu-api-js
Official Javascript Wrapper for Wibu API.

# instalation
```shell
npm install wibuapi
```
Or via yarn
```shell
yarn add wibuapi
```

# Examle

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
)}
.catch(error => {
    console.log(error)
})
```

# LIST

| Name | Params | Require |
| :------------: | :---------------: | :-----: |
| NSFW | Nsfw | endpoint |

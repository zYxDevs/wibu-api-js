// Don't Worry I'am Loli Killers :)

const axios = require('axios');
const baseUrl = 'https://api.wibu-api.eu.org'

async function Nsfw(endpoint) {
    return new Promise((resolve, reject) => {
        const listEndpoint = ['ahegao','waifu','neko','trap','bj'];
        if (listEndpoint.includes(endpoint)) {
            const options = {
                method: "GET",
                url: baseUrl + '/api/anime/nsfw/' + endpoint,
            };
            axios.request(options).then(function (response) {
                resolve(response.data)
            }).catch(function (error) {
                let msgErr = {
                    message: 'An error occured report on @YBotsSupport'
                }
                reject(msgErr)
                console.log(error)
            });
        } else {
            let msgErr = {
                status: 404,
                message:'The endpoint you entered is not in the list, available endpoint [ ahegao, waifu, neko, trap, bj ]!!'
            }
            reject(msgErr)
        }
    })
}

module.exports.Nsfw = Nsfw
// Don't Worry I'am Loli Killers :)

const axios = require('axios');
const baseUrl = 'https://wibu-api.eu.org/api'

async function Nsfw(endpoint) {
    return new Promise((resolve, reject) => {
        const listEndpoint = ['ahegao','waifu','neko','trap','bj'];
        if (listEndpoint.includes(endpoint)) {
            const options = {
                method: "GET",
                url: baseUrl + '/anime/nsfw/' + endpoint,
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
async function Lendrive(link) {
    return new Promise((resolve, reject) => {
        const options = {
            method: "GET",
            url: baseUrl + '/anime/lendrive',
            params: {link: link}
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
    })
}
async function Kusonime(link) {
    return new Promise((resolve, reject) => {
        const options = {
            method: "GET",
            url: baseUrl + '/anime/kusonime',
            params: {link: link}
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
    })
}
async function Doronime(link) {
    return new Promise((resolve, reject) => {
        const options = {
            method: "GET",
            url: baseUrl + '/anime/doronime',
            params: {link: link}
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
    })
}

module.exports.Nsfw = Nsfw
module.exports.Lendrive = Lendrive
module.exports.Kusonime = Kusonime
module.exports.Doronime = Doronime

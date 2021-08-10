const axios = require("axios")
const {urlApi} = require("../../../config")

async function postData(endpoint, body, headers) {
    return axios.post(
        endpoint,
        body,
        {
            baseURL: urlApi,
            headers
        }
    ).then(function (response) {
        return response
    }).catch(function (response) {
        return response.response
    })
}

module.exports = {
    postData
}

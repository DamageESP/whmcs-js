/**
 * WHMCS client
 * @param options {{username:[String], serverUrl:String, password:[String], secret:[String], identifier:[String]}}
 */
class WHMCS {
  constructor ({ serverUrl, ...credentials }) {
    this.serverUrl = serverUrl
    this.credentials = credentials
  }

  callApi (options) {
    const fetch = require('node-fetch')

    const data = {
      ...this.credentials,
      ...options,
      responsetype: 'json'
    }

    // Convert from JS Object to URLSearchParams
    const params = new URLSearchParams()
    for (let key in data) {
      params.append(key, data[key])
    }

    return fetch(this.serverUrl, {
      method: 'POST',
      body: params
    }).then(r => r.json())
  }
}

module.exports = WHMCS

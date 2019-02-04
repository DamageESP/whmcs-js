const WHMCS = require('../whmcs')

/**
 * Allows you to manage your Servers module in WHMCS.
 * @extends WHMCS
 */
class Servers extends WHMCS {
  /**
   * @param {Object} config Object containing your API credentials.
   * @param {string} config.serverUrl URL to your installation. Remember to point to /includes/api.php
   * @param {string} [config.username]
   * @param {string} [config.password]
   * @param {string} [config.identifier]
   * @param {string} [config.secret]
   */
  constructor (config) {
    super(config)
  }
  /**
	* Get health status. - https://developers.whmcs.com/api-reference/gethealthstatus/
	* @param {Object} opts
	* @param {Boolean} [opts.fetchStatus] Pass as true to attempt to fetch server status values.
	*/
	getHealthStatus (opts) {
		const options = {
			action: 'GetHealthStatus',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Get servers. - https://developers.whmcs.com/api-reference/getservers/
	* @param {Object} opts
	* @param {Boolean} [opts.fetchStatus] Pass as true to attempt to fetch server status values.
	*/
	getServers (opts) {
		const options = {
			action: 'GetServers',
			...opts
		}
		return this.callApi(options)
	}
}

module.exports = Servers

const WHMCS = require('../whmcs')

/**
 * Allows you to manage your Addons module in WHMCS.
 * @extends WHMCS
 */
class Addons extends WHMCS {
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
	* Updates a Client Addon - https://developers.whmcs.com/api-reference/updateclientaddon/
	* @param {Object} opts
	* @param {Number} opts.id The id of the client addon to update
	* @param {String} [opts.status] The status to change the addon to
	* @param {String} [opts.terminationDate] The termination date of the addon Y-m-d
	* @param {Number} [opts.addonid] The configured addon id to update the client addon to
	* @param {String} [opts.name] The custom name to apply to the addon
	* @param {Number} [opts.setupfee] The setup fee for the client addon
	* @param {Number} [opts.recurring] The recurring amount for the client addon
	* @param {String} [opts.billingcycle] The billing cycle for the addon
	* @param {String} [opts.nextduedate] The next due date for the addon Y-m-d
	* @param {String} [opts.nextinvoicedate] The next invoice date for the addon Y-m-d
	* @param {String} [opts.terminationDate] The termination date of the addon Y-m-d
	* @param {String} [opts.notes] The admin notes to associate with the addon
	*/
	updateClientAddon (opts) {
		const options = {
			action: 'UpdateClientAddon',
			...opts
		}
		return this.callApi(options)
	}
}

module.exports = Addons

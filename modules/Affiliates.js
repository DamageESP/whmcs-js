const WHMCS = require('../whmcs')

/**
 * Allows you to manage your Project Management module in WHMCS.
 * @extends WHMCS
 */
class Affiliates extends WHMCS {
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
	* Activate affiliate referrals for a client. - https://developers.whmcs.com/api-reference/affiliateactivate/
	* @param {Object} opts
	* @param {Number} opts.userid The client ID to activate affiliate status for
	*/
	affiliateActivate (opts) {
		const options = {
			action: 'AffiliateActivate',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Obtain an array of affiliates - https://developers.whmcs.com/api-reference/getaffiliates/
	* @param {Object} opts
	* @param {Number} [opts.limitstart] The offset for the returned affiliate data (default: 0)
	* @param {Number} [opts.limitnum] The number of records to return (default: 25)
	* @param {Number} [opts.userid] Obtain affiliate data for a specific client account
	* @param {Number} [opts.visitors] Provide affiliates that match a specific visitor count
	* @param {String} [opts.paytype] Provide affiliates matching the paytype provided. One of “, ‘percentage’, ‘fixedamount’
	* @param {Number} [opts.payamount] Provide affiliates matching a specific overridden payout amount
	* @param {Number} [opts.onetime] Provide affiliates configured to receive one time affiliates
	* @param {Number} [opts.balance] Provide affiliates that have this balance
	* @param {Number} [opts.withdrawn] Provide affiliates that have withdrawn this amount
	*/
	getAffiliates (opts) {
		const options = {
			action: 'GetAffiliates',
			...opts
		}
		return this.callApi(options)
	}
}

module.exports = Affiliates

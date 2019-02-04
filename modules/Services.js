const WHMCS = require('../whmcs')

/**
 * Allows you to manage your Services module in WHMCS.
 * @extends WHMCS
 */
class Services extends WHMCS {
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
	* Runs a change package action for a given service. - https://developers.whmcs.com/api-reference/modulechangepackage/
	* @param {Object} opts
	* @param {Number} opts.serviceid The service ID to run the action for
	*/
	moduleChangePackage (opts) {
		const options = {
			action: 'ModuleChangePackage',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Runs a change password action for a given service. - https://developers.whmcs.com/api-reference/modulechangepw/
	* @param {Object} opts
	* @param {Number} opts.serviceid The service ID to run the action for
	* @param {String} [opts.servicepassword] A new password to assign to the service
	*/
	moduleChangePw (opts) {
		const options = {
			action: 'ModuleChangePw',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Updates a Client Service - https://developers.whmcs.com/api-reference/updateclientproduct/
	* @param {Object} opts
	* @param {Number} opts.serviceid The id of the client service to update
	* @param {Number} [opts.pid] The package id to associate with the service
	* @param {Number} [opts.serverid] The server id to associate with the service
	* @param {String} [opts.nextduedate] The next due date of the service (Y-m-d)
	* @param {String} [opts.terminationDate] Update the termination date of the service (Y-m-d)
	* @param {String} [opts.completedDate] Update the completed date of the service (Y-m-d)
	* @param {String} [opts.domain] The domain name to be changed to
	* @param {Number} [opts.firstpaymentamount] The first payment amount on the service
	* @param {Number} [opts.recurringamount] The recurring amount for automatic renewal invoices
	* @param {String} [opts.paymentmethod] The payment method to associate in system format (eg paypal)
	* @param {String} [opts.billingcycle] The term in which the product is billed on (eg One-Time, Monthly, Quarterly, etc)
	* @param {String} [opts.subscriptionid] The subscription ID to associate with the service
	* @param {String} [opts.status] The status to change the service to
	* @param {String} [opts.notes] The admin notes for the service
	* @param {String} [opts.serviceusername] The service username
	* @param {String} [opts.servicepassword] The service password
	* @param {String} [opts.overideautosuspend] Should override auto suspend be provided (‘on’ or ‘off’)
	* @param {String} [opts.overidesuspenduntil] Update the Override Suspend date of the service (Y-m-d)
	* @param {String} [opts.ns1] (VPS/Dedicated servers only)
	* @param {String} [opts.ns2] (VPS/Dedicated servers only)
	* @param {String} [opts.dedicatedip] 
	* @param {String} [opts.assignedips] (VPS/Dedicated servers only)
	* @param {Number} [opts.diskusage] The disk usage in bytes
	* @param {Number} [opts.disklimit] The disk limit in bytes
	* @param {Number} [opts.bwusage] The bandwidth usage in bytes
	* @param {Number} [opts.bwlimit] The bandwidth limit in bytes
	* @param {String} [opts.overidesuspenduntil] 
	* @param {String} [opts.suspendreason] 
	* @param {Number} [opts.promoid] The promotion Id to associate
	* @param {Array} [opts.unset] An array of items to unset. Can be one of: ‘domain’, ‘serviceusername’, ‘servicepassword’, ‘subscriptionid’, ‘ns1’, ‘ns2’, ‘dedicatedip’, ‘assignedips’, ‘notes’, ‘suspendreason’
	* @param {Boolean} [opts.autorecalc] Should the recurring amount of the service be automatically recalculated (this will ignore any passed $recurringamount)
	* @param {String} [opts.customfields] Base64 encoded serialized array of custom field values - base64_encode(serialize(array(“1”=>“Yahoo”)));
	* @param {String} [opts.configoptions] Base64 encoded serialized array of configurable option field values - base64_encode(serialize(array(configoptionid => dropdownoptionid, XXX => array(‘optionid’ => YYY, ‘qty’ => ZZZ)))) - XXX is the ID of the configurable option - YYY is the optionid found in tblhostingconfigoption.optionid - ZZZ is the quantity you want to use for that option
	*/
	updateClientProduct (opts) {
		const options = {
			action: 'UpdateClientProduct',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Runs a custom module action for a given service. - https://developers.whmcs.com/api-reference/modulecustom/
	* @param {Object} opts
	* @param {Number} opts.serviceid The service ID to run the action for
	* @param {String} opts.func_name The name of the custom function to run
	*/
	moduleCustom (opts) {
		const options = {
			action: 'ModuleCustom',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Runs the module suspend action for a given service. - https://developers.whmcs.com/api-reference/modulesuspend/
	* @param {Object} opts
	* @param {Number} opts.serviceid The service ID to run the action for
	* @param {String} [opts.suspendreason] A reason for the suspension
	*/
	moduleSuspend (opts) {
		const options = {
			action: 'ModuleSuspend',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Runs an unsuspend action for a given service. - https://developers.whmcs.com/api-reference/moduleunsuspend/
	* @param {Object} opts
	* @param {Number} opts.serviceid The service ID to run the action for
	*/
	moduleUnsuspend (opts) {
		const options = {
			action: 'ModuleUnsuspend',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Runs the module create action for a given service. - https://developers.whmcs.com/api-reference/modulecreate/
	* @param {Object} opts
	* @param {Number} opts.serviceid The service ID to run the action for
	*/
	moduleCreate (opts) {
		const options = {
			action: 'ModuleCreate',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Runs a terminate action for a given service. - https://developers.whmcs.com/api-reference/moduleterminate/
	* @param {Object} opts
	* @param {Number} opts.serviceid The service ID to run the action for
	*/
	moduleTerminate (opts) {
		const options = {
			action: 'ModuleTerminate',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Upgrade, or calculate an upgrade on, a product - https://developers.whmcs.com/api-reference/upgradeproduct/
	* @param {Object} opts
	* @param {Number} opts.serviceid The ID of the service to update
	* @param {Boolean} [opts.calconly] Only calculate the upgrade amount
	* @param {String} opts.paymentmethod The upgrade payment method in system format (e.g. paypal)
	* @param {String} opts.type The type of upgrade (‘product’, ‘configoptions’)
	* @param {Number} [opts.newproductid] The Id of the new product
	* @param {String} [opts.newproductbillingcycle] The new products billing cycle
	* @param {String} [opts.promocode] The promotion code to apply to the upgrade
	* @param {Array} [opts.configoptions] An array of config options to upgrade
	* @param {Number} [opts.configoptions[id]] The id of the config option
	* @param {Number} [opts.configoptions[optiontype]] The config option type
	* @param {Number} [opts.configoptions[selectedvalue]] The config option selected value
	* @param {Number} [opts.configoptions[selectedqty]] The config option quantity selected
	*/
	upgradeProduct (opts) {
		const options = {
			action: 'UpgradeProduct',
			...opts
		}
		return this.callApi(options)
	}
}

module.exports = Services

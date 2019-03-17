const WHMCS = require('../whmcs')

/**
 * Allows you to manage your orders module in WHMCS.
 * @extends WHMCS
 */

class Orders extends WHMCS {
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
	* Retrieve Order Status and number in those statuses - https://developers.whmcs.com/api-reference/getorderstatuses/
	* @param {Object} opts
	*/
	getOrderStatuses (opts) {
		const options = {
			action: 'GetOrderStatuses',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* NOTE: This API method is designed to be used in the building of custom order
forms. As a result, only custom fields that have the ‘Show on Order Form’
setting enabled will be returned for a given product. - https://developers.whmcs.com/api-reference/getproducts/
	* @param {Object} opts
	* @param {Number} [opts.pid] string
	* @param {Number} [opts.gid] Retrieve products in a specific group id
	* @param {String} [opts.module] Retrieve products utilising a specific module
	*/
	getProducts (opts) {
		const options = {
			action: 'GetProducts',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Accepts a pending order - https://developers.whmcs.com/api-reference/acceptorder/
	* @param {Object} opts
	* @param {Number} opts.orderid The order id to be accepted
	* @param {Number} [opts.serverid] The specific server to assign to products within the order
	* @param {String} [opts.serviceusername] The specific username to assign to products within the order
	* @param {String} [opts.servicepassword] The specific password to assign to products within the order
	* @param {String} [opts.registrar] The specific registrar to assign to domains within the order
	* @param {Boolean} [opts.sendregistrar] Send the request to the registrar to register the domain.
	* @param {Boolean} [opts.autosetup] Send the request to the product module to activate the service. This can override the product configuration.
	* @param {Boolean} [opts.sendemail] Send any automatic emails. This can be Product Welcome, Domain Renewal, Domain Transfer etc.
	*/
	acceptOrder (opts) {
		const options = {
			action: 'AcceptOrder',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Sets an order, and all associated order items to Pending status - https://developers.whmcs.com/api-reference/pendingorder/
	* @param {Object} opts
	* @param {Number} opts.orderid The order id to be accepted
	*/
	pendingOrder (opts) {
		const options = {
			action: 'PendingOrder',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Marks an order as fraudulent. - https://developers.whmcs.com/api-reference/fraudorder/
	* @param {Object} opts
	* @param {Number} opts.orderid The Order ID to set as fraud
	* @param {Boolean} [opts.cancelsub] Pass as true to cancel any PayPal Subscription(s) associated with the products & services that belong to the given order.
	*/
	fraudOrder (opts) {
		const options = {
			action: 'FraudOrder',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Cancel a Pending Order - https://developers.whmcs.com/api-reference/cancelorder/
	* @param {Object} opts
	* @param {Number} opts.orderid The ID of the pending order
	* @param {Boolean} [opts.cancelsub] Attempt to cancel the subscription associated with the products
	* @param {Boolean} [opts.noemail] Set to true to stop the invoice payment email being sent if the invoice becomes paid
	*/
	cancelOrder (opts) {
		const options = {
			action: 'CancelOrder',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Adds an order to a client. - https://developers.whmcs.com/api-reference/addorder/
	* @param {Object} opts
	* @param {Number} opts.clientid 
	* @param {String} opts.paymentmethod The payment method for the order in the system format. eg. paypal, mailin
	* @param {Array.<Number>} [opts.pid] The array of product ids to add the order for
	* @param {Array.<String>} [opts.domain] The array of domain names associated with the products/domains
	* @param {Array.<String>} [opts.billingcycle] The array of billing cycles for the products
	* @param {Array.<String>} [opts.domaintype] For domain registrations, an array of register or transfer values
	* @param {Array.<Number>} [opts.regperiod] For domain registrations, the registration periods for the domains in the order
	* @param {Array.<String>} [opts.eppcode] For domain transfers. The epp codes for the domains being transferred in the order
	* @param {String} [opts.nameserver1] The first nameserver to apply to all domains in the order
	* @param {String} [opts.nameserver2] The second nameserver to apply to all domains in the order
	* @param {String} [opts.nameserver3] The third nameserver to apply to all domains in the order
	* @param {String} [opts.nameserver4] The fourth nameserver to apply to all domains in the order
	* @param {String} [opts.nameserver5] The fifth nameserver to apply to all domains in the order
	* @param {Array.<String>} [opts.customfields] an array of base64 encoded serialized array of product custom field values
	* @param {Array.<String>} [opts.configoptions] an array of base64 encoded serialized array of product configurable options values
	* @param {Array.<Number>} [opts.priceoverride] Override the price of the product being ordered
	* @param {String} [opts.promocode] The promotion code to apply to the order
	* @param {Boolean} [opts.promooverride] Should the promotion apply to the order even without matching promotional products
	* @param {Number} [opts.affid] The affiliate id to associate with the order
	* @param {Boolean} [opts.noinvoice] Set to true to suppress the invoice generating for the whole order
	* @param {Boolean} [opts.noinvoiceemail] Set to true to suppress the Invoice Created email being sent for the order
	* @param {Boolean} [opts.noemail] Set to true to suppress the Order Confirmation email being sent
	* @param {Array.<String>} [opts.addons] A comma separated list of addons to create on order with the products
	* @param {Array.<String>} [opts.hostname] The hostname of the server for VPS/Dedicated Server orders
	* @param {Array.<String>} [opts.ns1prefix] The first nameserver prefix for the VPS/Dedicated server. Eg. ns1 in ns1.hostname.com
	* @param {Array.<String>} [opts.ns2prefix] The second nameserver prefix for the VPS/Dedicated server. Eg. ns2 in ns2.hostname.com
	* @param {Array.<String>} [opts.rootpw] The desired root password for the VPS/Dedicated server.
	* @param {Number} [opts.contactid] The id of the contact, associated with the client, that should apply to all domains in the order
	* @param {Array.<Boolean>} [opts.dnsmanagement] Add DNS Management to the Domain Order
	* @param {Array.<String>} [opts.domainfields] an array of base64 encoded serialized array of TLD Specific Field Values
	* @param {Array.<Boolean>} [opts.emailforwarding] Add Email Forwarding to the Domain Order
	* @param {Array.<Boolean>} [opts.idprotection] Add ID Protection to the Domain Order
	* @param {Array.<Number>} [opts.domainpriceoverride] Override the price of the registration price on the domain being ordered
	* @param {Array.<Number>} [opts.domainrenewoverride] Override the price of the renewal price on the domain being ordered
	* @param {Array} [opts.domainrenewals] A name -> value array of $domainName -> $renewalPeriod renewals to add an order for
	* @param {String} [opts.clientip] The ip address to associate with the order
	* @param {Number} [opts.addonid] The Addon ID for an Addon Only Order
	* @param {Number} [opts.serviceid] The service ID for the addon only order
	* @param {Array.<Number>} [opts.addonids] An Array of addon ids for an Addon Only Order
	* @param {Array.<Number>} [opts.serviceids] An array of service ids to associate the addons for an Addon Only order
	*/
	addOrder (opts) {
		const options = {
			action: 'AddOrder',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Obtain orders matching the passed criteria - https://developers.whmcs.com/api-reference/getorders/
	* @param {Object} opts
	* @param {Number} [opts.limitstart] The offset for the returned order data (default: 0)
	* @param {Number} [opts.limitnum] The number of records to return (default: 25)
	* @param {Number} [opts.id] Find orders for a specific id
	* @param {Number} [opts.userid] Find orders for a specific client id
	* @param {String} [opts.status] Find orders for a specific status
	*/
	getOrders (opts) {
		const options = {
			action: 'GetOrders',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Run a fraud check on a passed Order ID - https://developers.whmcs.com/api-reference/orderfraudcheck/
	* @param {Object} opts
	* @param {Number} opts.orderid The order id to complete the fraud check on
	* @param {String} [opts.ipaddress] To override the IP address on the fraud check
	*/
	orderFraudCheck (opts) {
		const options = {
			action: 'OrderFraudCheck',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Obtain promotions matching the passed criteria - https://developers.whmcs.com/api-reference/getpromotions/
	* @param {Object} opts
	* @param {String} [opts.code] Retrieve a specific promotion code. Do not pass to retrieve all
	*/
	getPromotions (opts) {
		const options = {
			action: 'GetPromotions',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Removes an order from the system. This cannot be undone. This will remove all items associated with the order (services, addons, domains, invoices etc) - https://developers.whmcs.com/api-reference/deleteorder/
	* @param {Object} opts
	* @param {Number} opts.orderid The order to be deleted
	*/
	deleteOrder (opts) {
		const options = {
			action: 'DeleteOrder',
			...opts
		}
		return this.callApi(options)
	}
}

module.exports = Orders

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
   * Accept order - https://developers.whmcs.com/api-reference/acceptorder/
   * @param {Object} order
   * @param {Number} order.orderid
   * @param {Number} [order.serverid]
   * @param {String} [order.serviceusername]
   * @param {String} [order.servicepassword]
   * @param {String} [order.registrar]
   * @param {Boolean} [order.sendregistrar]
   * @param {Boolean} [order.autosetup]
   * @param {Boolean} [order.sendemail]
   */
  acceptOrder (order) {
    const options = {
      action: 'AcceptOrder',
      ...order
    }
    return this.callApi(options)
  }
  /**
   * Add order - https://developers.whmcs.com/api-reference/addorder/
   * @param {Object} order
   * @param {Number} order.clientid
   * @param {string} order.paymentmethod
   * @param {Number|Array.<Number>} [order.pid] Product id
   * @param {String|Array.<String>} [order.domain] Domain name
   * @param {String|Array.<String>} [order.billingcycle]
   * @param {String|Array.<String>} [order.domaintype] Set for domain registration, register or transfer
   * @param {Number|Array.<Number>} [order.regperiod]
   * @param {String|Array.<String>} [order.eppcode]
   * @param {string} [order.nameserver1] The first nameserver to apply to all domains in the order
   * @param {string} [order.nameserver2] The second nameserver to apply to all domains in the order
   * @param {string} [order.nameserver3] The third nameserver to apply to all domains in the order
   * @param {string} [order.nameserver4] The fourth nameserver to apply to all domains in the order
   * @param {string} [order.nameserver5] The fifth nameserver to apply to all domains in the order
   * @param {String|Array.<String>} [order.customfields] Base64 encoded serialized array of custom field values
   * @param {String|Array.<String>} [order.configoptions] Base64 encoded serialized array of configurable product options
   * @param {Number|Array.<Number>} [order.priceoverride] Override the price of the product being ordered
   * @param {string} [order.promocode] The promotion code to apply to the order
   * @param {string} [order.promooverride] 	Should the promotion apply to the order even without matching promotional products
   * @param {string} [order.affid] The affiliate id to associate with the order
   * @param {boolean} [order.noinvoice] Set to true to suppress the invoice generating for the whole order
   * @param {boolean} [order.noinvoiceemail] Set to true to suppress the Invoice Created email being sent for the order
   * @param {boolean} [order.noemail] Set to true to suppress the Invoice Created email being sent for the order
   * @param {String|Array.<String>} [order.addons] A comma separated list of addons to create on order with the products
   * @param {String|Array.<String>} [order.hostname] Hostname of the server
   * @param {String|Array.<String>} [order.ns1prefix] Prefix to be used for the NS1 nameserver
   * @param {String|Array.<String>} [order.ns2prefix] Prefix to be used for the NS2 nameserver
   * @param {String|Array.<String>} [order.rootpw] Root password for the server
   * @param {string} [order.contactid] the ID of a contact to use for the domain registrant details
   * @param {boolean} [order.dnsmanagement]  True to enable
   * @param {String|Array.<String>} [order.domainfields] Base64 encoded serialized array of the TLD specific field values
   * @param {boolean} [order.emailforwarding] True to enable
   * @param {boolean} [order.idprotection]  True to enable
   * @param {Number|Array.<Number>} [order.domainpriceoverride] Override the price of the registration price on the domain being ordered
   * @param {Number|Array.<Number>} [order.domainrenewoverride] Override the price of the renewal price on the domain being ordered
   * @param {Object} [order.domainrenewals] Object Name:value of domain to regperiod
   * @param {string} [order.clientip] The ip address to associate with the order
   * @param {Number} [order.addonid] The Addon ID for an Addon Only Order
   * @param {Number} [order.serviceid] The Service ID for an Addon Only Order
   * @param {Number|Array.<Number>} [order.addonids] An Array of addon ids for an Addon Only Order
   * @param {Number|Array.<Number>} [order.serviceids] An array of service ids to associate the addons for an Addon Only order
   */
  addOrder (order) {
    const options = {
      action: 'AddOrder',
      ...order
    }
    return this.callApi(options)
  }
  /**
   * Cancel a Pending Order - https://developers.whmcs.com/api-reference/cancelorder/
   * @param {Object} order
   * @param {Number} order.orderid The ID of the pending order
   * @param {Boolean} [order.cancelsub] Attempt to cancel the subscription associated with the products
   * @param {Boolean} [order.noemail] Set to true to stop the invoice payment email being sent if the invoice becomes paid
   */
  cancelOrder (order) {
    const options = {
      action: 'CancelOrder',
      ...order
    }
    return this.callApi(options)
  }
  /**
   * Deletes a cancelled or fraud order. - https://developers.whmcs.com/api-reference/deleteorder/
   * Removes an order from the system. This cannot be undone. This will remove all items associated with the order (services, addons, domains, invoices etc)
   * @param {Object} order
   * @param {Number} order.orderid The order to be deleted
   */
  deleteOrder (order) {
    const options = {
      action: 'DeleteOrder',
      ...order
    }
    return this.callApi(options)
  }
  /**
   * Marks an order as fraudulent. - https://developers.whmcs.com/api-reference/fraudorder/
   * @param {Object} order
   * @param {Number} order.orderid The Order ID to set as fraud
   * @param {Boolean} [order.cancelsub] Pass as true to cancel any PayPal Subscription(s) associated with the products & services that belong to the given order.
   */
  fraudOrder (order) {
    const options = {
      action: 'FraudOrder',
      ...order
    }
    return this.callApi(options)
  }
  /**
   * Obtain orders matching the passed criteria - https://developers.whmcs.com/api-reference/getorders/
   * @param {Object} [order]
   * @param {Number} [order.limitstart] The offset for the returned order data (default: 0)
   * @param {Number} [order.limitnum] The number of records to return (default: 25)
   * @param {Number} [order.id] Find orders for a specific id
   * @param {Number} [order.userid] Find orders for a specific client id
   * @param {String} [order.status] Find orders for a specific status
   */
  getOrders (order) {
    const options = {
      action: 'GetOrders',
      ...order
    }
    return this.callApi(options)
  }
  /**
   * Retrieve Order Status and number in those statuses - https://developers.whmcs.com/api-reference/getorderstatuses/
   */
  getOrderStatuses () {
    const options = {
      action: 'GetOrderStatuses'
    }
    return this.callApi(options)
  }
  /**
   * Obtain promotions matching the passed criteria - https://developers.whmcs.com/api-reference/getpromotions/
   * @param {Object} [order]
   * @param {String} [order.code] Retrieve a specific promotion code. Do not pass to retrieve all
   */
  getPromotions (order) {
    const options = {
      action: 'GetPromotions',
      ...order
    }
    return this.callApi(options)
  }
  /**
   * Run a fraud check on a passed Order ID - https://developers.whmcs.com/api-reference/orderfraudcheck/
   * @param {Object} order
   * @param {Number} order.orderid The order id to complete the fraud check on
   * @param {String} [order.ipaddress] To override the IP address on the fraud check
   */
  orderFraudCheck (order) {
    const options = {
      action: 'OrderFraudCheck',
      ...order
    }
    return this.callApi(options)
  }
  /**
  * Sets an order, and all associated order items to Pending Status - https://developers.whmcs.com/api-reference/pendingorder/
  * @param {Object} order
  * @param {Number} order.orderid The order id to be accepted
  */
  pendingOrder (order) {
    const options = {
      action: 'PendingOrder',
      ...order
    }
    return this.callApi(options)
  }
}

module.exports = Orders

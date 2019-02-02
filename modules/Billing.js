const WHMCS = require('../whmcs')

/**
 * Allows you to manage your billing module in WHMCS.
 * @extends WHMCS
 */
class Billing extends WHMCS {
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
   * Add order - http://docs.whmcs.com/API:Add_Order
   * @param {string|number} clientid
   * @param {Object} order
   * @param {string|number} order.clientid Client id for order
   * @param {string|number} order.pid Product id
   * @param {string} order.domain Domain name
   * @param {string} order.billingcycle
   * @param {string} order.domaintype Set for domain registration, register or transfer
   * @param {string} order.regperiod
   * @param {string} order.eppcode
   * @param {string} order.paymentmethod
   * @param {string} [order.customfields] Base64 encoded serialized array of custom field values
   * @param {string} [order.configoptions] Base64 encoded serialized array of configurable product options
   * @param {string} [order.priceoverride]
   * @param {string} [order.promocode]
   * @param {string} [order.promooverride]
   * @param {string} [order.affid]
   * @param {boolean} [order.noinvoice]
   * @param {boolean} [order.noinvoiceemail] 
   * @param {boolean} [order.noemail]
   * @param {string} [order.clientip]
   * @param {string} [order.addons] Comma separated list of addon ids
   * @param {string} [order.hostname] Hostname of the server
   * @param {string} [order.ns1prefix] Prefix to be used for the NS1 nameserver
   * @param {string} [order.ns2prefix] Prefix to be used for the NS2 nameserver
   * @param {string} [order.rootpw] Root password for the server
   * @param {string} [order.contactid] the ID of a contact to use for the domain registrant details
   * @param {boolean} [order.dnsmanagement]  True to enable
   * @param {string} [order.domainfields] Base64 encoded serialized array of the TLD specific field values
   * @param {boolean} [order.emailforwarding]  True to enable
   * @param {boolean} [order.idprotection]  True to enable
   * @param {string} [order.nameserver1] Domain registration only
   * @param {string} [order.nameserver2] Domain registration only
   * @param {string} [order.nameserver3] Domain registration only
   * @param {string} [order.nameserver4] Domain registration only
   * @param {Object} [order.domainrenewals] Object Name:value of domain to regperiod
   */
  addOrder (clientid, order) {
    const options = {
      action: 'addorder',
      clientid: clientid
    }

    Object.assign(options, order)

    return this.callApi(options)
  }
  createInvoice (clientid, invoice) {
    const options = {
      action: 'createinvoice',
      userid: clientid
    }

    Object.assign(options, invoice)

    return this.callApi(options)
  }
  /**
   * Accept order - http://docs.whmcs.com/API:Accept_Order
   * @param {String|Number} orderid
   * @param {Object} [opts]
   * @param {String} [opts.serverid]
   * @param {String} [opts.serviceusername]
   * @param {String} [opts.servicepassword]
   * @param {String} [opts.registrar]
   * @param {Boolean} [opts.autosetup]
   * @param {Boolean} [opts.sendregistrar]
   * @param {Boolean} [opts.sendemail]
   */
  acceptOrder (orderid, opts) {
    const options = {
      action: 'acceptorder',
      orderid: orderid
    }

    Object.assign(options, opts)

    return this.callApi(options)
  }
  /**
  * Delete order - http://docs.whmcs.com/API:Cancel_Order
  * @param {String|Number} orderid
  */
  deleteOrder (orderid) {
    const options = {
      action: 'deleteorder',
      orderid: orderid
    }

    return this.callApi(options)
  }
  /**
   * Cancel order - http://docs.whmcs.com/API:Cancel_Order
   * @param {String|Number} orderid
   */
  cancelOrder (orderid) {
    const options = {
      action: 'cancelorder',
      orderid: orderid
    }

    return this.callApi(options)
  }
  /**
   * Add credit - http://docs.whmcs.com/API:Add_Credit
   * @param {String|Number} clientid
   * @param {String|Number} amount
   * @param {String} description
   */
  addCredit (clientid, amount, description = 'Added via API') {
    const options = {
      action: 'addcredit',
      clientid,
      amount,
      description
    }

    return this.callApi(options)
  }
  /**
   * Apply Credit - http://docs.whmcs.com/API:Apply_Credit
   * @param {String|Number} invoiceid
   * @param {String|Number} [amount]
   */
  applyCredit (invoiceid, amount = 'full') {
    const options = {
      action: 'applycredit',
      invoiceid,
      amount
    }

    return this.callApi(options)
  }
  /**
   * Get invoice - http://docs.whmcs.com/API:Get_Invoice
   * @param invoiceid
   */
  getInvoice (invoiceid) {
    const options = {
      action: 'getinvoice',
      invoiceid: invoiceid
    }

    return this.callApi(options)
  }
  /**
   * Get invoices - http://docs.whmcs.com/API:Get_Invoices
   * @param {String|Number} userid
   * @param {Object} [opts]
   * @param {String} [opts.userid]
   * @param {String} [opts.status] Status to filter for: Paid, Unpaid, Cancelled, Overdue, etc.
   * @param {String} [opts.limitstart]
   * @param {String} [opts.limitnum] Default is 25
   */
  getInvoices (opts) {
    let options = {
      action: 'getinvoices'
    }
    Object.assign(options, opts)

    return this.callApi(options)
  }
  /**
   * Update invoice - http://docs.whmcs.com/API:Update_Invoice
   * @param {String|Number} invoiceid Invoice ID
   * @param {object} [opts]
   * @param {Array} [opts.itemdescription] Array of existing line item descriptions to update. Line ID from database needed, itemamount and itemtaxed should be passed when updating the description
   * @param {Array} [opts.itemamount] Array of existing line item amounts to update
   * @param {Array} [opts.itemtaxed] Array of existing line items taxed or not
   * @param {Array} [opts.newitemdescription] Array of new line item descriptipons to add
   * @param {Array} [opts.newitemamount] Array of new line item amounts
   * @param {Array} [opts.newitemtaxed] Array of new line items taxed or not
   * @param {String} [opts.date] Date of invoice format yyyymmdd
   * @param {String} [opts.duedate] Due date of invoice format yyyymmdd
   * @param {String} [opts.datepaid] Date invoice was paid format yyyymmdd
   * @param {String} [opts.status] Unpaid, Paid, Cancelled, Collection, Refunded, etc.
   * @param {String} [opts.paymentmethod]
   * @param {String} [opts.notes]
   * @param {Array} [opts.deletelineids] Array of line IDs for the current invoice to remove (tblinvoiceitems.id)
   */
  updateInvoice (invoiceid, opts) {
    const options = {
      action: 'updateinvoice',
      invoiceid: invoiceid
    }
    Object.assign(options, opts)

    return this.callApi(options)
  }
  /**
   * Capture payment - http://docs.whmcs.com/API:Capture_Payment
   * @param {String|Number} invoiceid
   * @param {Object} [opts]
   * @param {String} [opts.cvv]
   */
  capturePayment (invoiceid, opts) {
    const options = {
      action: 'capturepayment',
      invoiceid: invoiceid
    }
    Object.assign(options, opts)

    return this.callApi(options)
  }
}

module.exports = Billing

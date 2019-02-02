const WHMCS = require('../whmcs')

/**
 * Allows you to manage your customers module in WHMCS.
 * @extends WHMCS
 */
class Customers extends WHMCS {
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
   * Create customer - http://docs.whmcs.com/API:Add_Client
   * @param {Object} customer
   * @param {String} [customer.firstname]
   * @param {String} [customer.lastname]
   * @param {String} [customer.email]
   * @param {String} [customer.address1]
   * @param {String} [customer.city]
   * @param {String} [customer.state]
   * @param {String} [customer.postcode]
   * @param {String} [customer.country] Two letter ISO country code
   * @param {String} [customer.phonenumber]
   * @param {String} [customer.password2]
   * @param {String} [customer.companyname]
   * @param {String} [customer.address2]
   * @param {String} [customer.currency]
   * @param {String} [customer.clientip]
   * @param {String} [customer.language]
   * @param {String} [customer.groupid]
   * @param {String} [customer.securityqid]
   * @param {String} [customer.securityqans]
   * @param {String} [customer.notes]
   * @param {String} [customer.cctype]
   * @param {String} [customer.cardnum]
   * @param {String} [customer.expdate]
   * @param {String} [customer.startdate]
   * @param {String} [customer.issuenumber]
   * @param {String} [customer.customfields] Base64 encoded string custom field values
   * @param {Boolean} [customer.noemail]
   * @param {Boolean} [customer.skipvalidation]
  */
  createCustomer (customer) {
    const options = {
      action: 'addclient'
    }

    Object.assign(options, customer)

    return this.callApi(options)
  }
  /**
   * Create contact - http://docs.whmcs.com/API:Add_Contact
   * @param {Object} contact
   * @param {String} contact.clientid
   * @param {String} [contact.firstname]
   * @param {String} [contact.lastname]
   * @param {String} [contact.companyname]
   * @param {String} [contact.email] Must be unique if creating a sub-account
   * @param {String} [contact.address1]
   * @param {String} [contact.address2]
   * @param {String} [contact.city]
   * @param {String} [contact.state]
   * @param {String} [contact.postcode]
   * @param {String} [contact.country] Two letter ISO country code
   * @param {String} [contact.phonenumber]
   * @param {String} [contact.password2]
   * @param {String} [contact.permissions] manageproducts, managedomains, etc.
   * @param {Boolean} [contact.generalemails]
   * @param {Boolean} [contact.productemails]
   * @param {Boolean} [contact.domainemails]
   * @param {Boolean} [contact.invoiceemails]
   * @param {Boolean} [contact.supportemails]
  */
  createContact (contact) {
    const options = {
      action: 'addcontact'
    }

    Object.assign(options, contact)

    return this.callApi(options)
  }
  /**
   * Upgrade product - http://docs.whmcs.com/API:Upgrade_Product
   * @param {String} serviceid
   * @param {Object} data
   * @param {String} data.clientid
   * @param {String} data.serviceid
   * @param {String} data.type product or configoptions
   * @param {String} data.newproductid
   * @param data.newproductbillingcycle
   * @param {String|Array} data.configoptions Array of config options if upgrade type is configoptions
   * @param {String} data.paymentmethod
   * @param {String} [data.promocode]
   * @param {Boolean} [data.calconly] Set true to just validate upgrade and get price, false to create order
   * @param {String} [data.ordernotes]
  */
  updateService (serviceid, data) {
    const options = {
      action: 'upgradeproduct',
      serviceid: serviceid
    }

    Object.assign(options, data)

    return this.callApi(options)
  }
  /**
   * Delete contact - http://docs.whmcs.com/API:Delete_Contact
   * @param {String} contactid
   */
  deleteContact (contactid) {
    const options = {
      action: 'deletecontact',
      contactid: contactid
    }

    const deleteOptions = {
      client: this,
      body: options
    }

    this.callApi(deleteOptions)
  }
  getCredits (userid) {
    const options = {
      action: 'getcredits',
      clientid: userid
    }

    const creditOptions = {
      client: this,
      body: options
    }

    this.callApi(creditOptions)
  }
  /**
   * Update contact - http://docs.whmcs.com/API:Update_Contact
   * @param {String} contactid
   * @param {Object} contact
   * @param {String} contact.clientid
   * @param {String} [contact.firstname]
   * @param {String} [contact.lastname]
   * @param {String} [contact.companyname]
   * @param {String} [contact.email] Must be unique if creating a sub-account
   * @param {String} [contact.address1]
   * @param {String} [contact.address2]
   * @param {String} [contact.city]
   * @param {String} [contact.state]
   * @param {String} [contact.postcode]
   * @param {String} [contact.country] Two letter ISO country code
   * @param {String} [contact.phonenumber]
   * @param {String} [contact.password2]
   * @param {String} [contact.permissions] manageproducts, managedomains, etc.
   * @param {Boolean} [contact.generalemails]
   * @param {Boolean} [contact.productemails]
   * @param {Boolean} [contact.domainemails]
   * @param {Boolean} [contact.invoiceemails]
   * @param {Boolean} [contact.supportemails]
   */
  updateContact (contactid, contact) {
    const options = {
      action: 'updatecontact',
      contactid: contactid
    }

    Object.assign(options, contact)

    return this.callApi(options)
  }
  /**
   * Update customer - http://docs.whmcs.com/API:Update_Client
   * @param {String} clientid
   * @param {Object} customer
   * @param[customer.firstname] String
   * @param[customer.lastname] String
   * @param[customer.companyname] String
   * @param[customer.email] String
   * @param[customer.address1] String
   * @param[customer.address2] String
   * @param[customer.city] String
   * @param[customer.state] String
   * @param[customer.postcode] String
   * @param[customer.country] String Two letter ISO country code
   * @param[customer.phonenumber] String
   * @param[customer.password2] String
   * @param[customer.credit] String Credit balance
   * @param[customer.taxexempt] Boolean
   * @param[customer.notes] String
   * @param[customer.cardtype] String
   * @param[customer.cardnum] String CC number
   * @param[customer.expdate] String CC expiry date
   * @param[customer.startdate] String CC start date
   * @param[customer.issuenumber] String CC issue number
   * @param[customer.clearcreditcard] Boolean
   * @param[customer.language] String
   * @param[customer.customfields] String Base64 encoded string of custom field values
   * @param[customer.status] Boolean
   * @param[customer.taxexempt] Boolean
   * @param[customer.latefeeoveride] Boolean
   * @param[customer.overideduenotices] Boolean
   * @param[customer.separateinvoices] Boolean
   * @param[customer.disableautocc] Boolean
   */
  updateCustomer (clientid, customer) {
    const options = {
      action: 'updateclient',
      clientid: clientid
    }

    Object.assign(options, customer)

    return this.callApi(options)
  }
  /**
   * Update customer domain - http://docs.whmcs.com/API:Update_Client_Domain
   * @param {String|Number} domainid Pass in domain id or name
   * @param {Object} [opts]
   * @param {String} [opts.type] Register or Transfer
   * @param {Boolean} [opts.autorecalc]
   * @param {String} [opts.regdate] Update the registration date yyyymmdd
   * @param {String} [opts.domain] Update the domain name
   * @param {String} [opts.firstpaymentamount] Set the first payment amount. No symbol, just xx.xx
   * @param {String} [opts.recurringamount] Setup fee cost. No symbol, just xx.xx
   * @param {String} [opts.registrar] Update the registrar assigned to the domain
   * @param {String} [opts.billingcycle] One of Free Account, One Time, Monthly, Quarterly, Semi-Annually, Annually, Biennially or Triennially
   * @param {String} [opts.status] One of Active, Pending, Pending Transfer, Expired, Cancelled, Fraud
   * @param {String} [opts.nextduedate] Update the next due date yyyymmdd
   * @param {String} [opts.nextinvoicedate] Update the next invoice date yyyymmdd
   * @param {String} [opts.expirydate] Update the expiry date yyyymmdd
   * @param {String} [opts.regperiod] Update the reg period for the domain. 1-10
   * @param {String} [opts.paymentmethod] set the payment method
   * @param {String} [opts.subscriptionid] allocate a subscription ID
   * @param {Boolean} [opts.dnsmanagement]
   * @param {Boolean} [opts.emailforwarding]
   * @param {Boolean} [opts.idprotection]
   * @param {Boolean} [opts.donotrenew]
   * @param {Boolean} [opts.updatens] Set to true to update Nameservers
   * @param {String} [opts.ns1]
   * @param {String} [opts.ns2]
   * @param {String} [opts.ns3]
   * @param {String} [opts.ns4]
   * @param {String} [opts.ns5]
   * @param {String} [opts.notes]
   */
  updateCustomerDomain (domainid, opts) {
    const options = {
      action: 'updateclientdomain'
    }

    if (isNaN(parseInt(domainid, 10))) {
      options.domain = domainid
    } else {
      options.domainid = domainid
    }

    Object.assign(options, opts)

    return this.callApi(options)
  }
  /**
   * Get contacts - http://docs.whmcs.com/API:Get_Contacts
   * @param {String} userid
   * @param {Object} [opts]
   * @param {String} [opts.limitstart]
   * @param {String} [opts.limitnum] Default is 25
   * @param {String} [opts.userid]
   * @param {String} [opts.firstname]
   * @param {String} [opts.lastname]
   * @param {String} [opts.companyname]
   * @param {String} [opts.email]
   * @param {String} [opts.address1]
   * @param {String} [opts.address2]
   * @param {String} [opts.city]
   * @param {String} [opts.state]
   * @param {String} [opts.postcode]
   * @param {String} [opts.country]
   * @param {String} [opts.phonenumber]
   * @param {Boolean} [opts.subaccount]
   */
  getContacts (userid, opts) {
    const options = {
      action: 'getcontacts',
      userid: userid
    }

    Object.assign(options, opts)

    return this.callApi(options)
  }
  /**
   * Get customer - http://docs.whmcs.com/API:Get_Clients_Details
   * @param {String} clientid Client ID or email
   * @param {Object} [opts]
   */
  getCustomer (clientid, opts) {
    const options = {
      action: 'getclientsdetails',
      stats: true
    }

    if (typeof clientid === 'number' || clientid.indexOf('@') === -1) {
      options.clientid = clientid
    } else {
      options.email = clientid
    }

    Object.assign(options, opts)

    return this.callApi(options)
  }
  /**
   * Get customer - http://docs.whmcs.com/API:Get_Clients_Details
   * @param {String} email
   * @param {Object} [opts]
   */
  getCustomerByEmail (email, opts) {
    const options = {
      action: 'getclientsdetails',
      stats: true,
      email: email
    }

    Object.assign(options, opts)

    return this.callApi(options)
  }
  /**
   * Delete customer - http://docs.whmcs.com/API:Delete_Client
   * @param {String} clientid
   */
  deleteCustomer (clientid) {
    const options = {
      action: 'deleteclient',
      clientid: clientid
    }

    return this.callApi(options)
  }
  /**
   * Get customer products - http://docs.whmcs.com/API:Get_Clients_Products
   * @param {String} clientid
   * @param {Object} [opts]
   * @param {String} [opts.clientid]
   * @param {String} [opts.serviceid]
   * @param {String} [opts.domain]
   * @param {String} [opts.pid]
   * @param {String} [opts.username2]
   * @param {String} [opts.limitstart] Used for pagination
   * @param {String} [opts.limitnum] Number of records to retrieve, Default = 999999
   */
  getCustomerProducts (clientid, opts) {
    const options = {
      action: 'getclientsproducts',
      clientid: clientid
    }

    Object.assign(options, opts)

    return this.callApi(options)
  }
  /**
   * Update customer product - http://docs.whmcs.com/API:Update_Client_Product
   * @param {String} serviceid
   * @param {Object} [service]
   * @param {String} [service.pid]
   * @param {String} [service.serverid]
   * @param {String} [service.regdate] Format: YYYY-MM-DD
   * @param {String} [service.nextduedate] Format: YYYY-MM-DD
   * @param {String} [service.domain]
   * @param {String} [service.firstpaymentamount]
   * @param {String} [service.recurringamount]
   * @param {String} [service.billingcycle]
   * @param {String} [service.paymentmethod]
   * @param {String} [service.status]
   * @param {String} [service.serviceusername]
   * @param {String} [service.servicepassword]] String
   * @param {String} [service.subscriptionid]
   * @param {String} [service.promoid]
   * @param {Boolean} [service.overideautosuspend]
   * @param {String} [service.overidesuspenduntil] Format: YYYY-MM-DD
   * @param {String} [service.ns1]
   * @param {String} [service.ns2]
   * @param {String} [service.dedicatedip]
   * @param {String} [service.assignedips]
   * @param {String} [service.notes]
   * @param {Boolean} [service.autorecalc]
   * @param {String} [service.customfields] Base64 encoded string of custom field values
   * @param {String} [service.configoptions] Base64 encoded string of configurable options values
   */
  updateCustomerProduct (serviceid, service) {
    const options = {
      action: 'updateclientproduct',
      serviceid: serviceid
    }

    Object.assign(options, service)

    return this.callApi(options)
  }
  /**
   * Send email - http://docs.whmcs.com/API:Send_Email
   * @param {String} id
   * @param {Object} opts
   * @param {String} [opts.messagename] Unique name of the email template to send from WHMCS
   * @param {String} [opts.customtype] Type of email: general, product, domain, invoice, support or affiliate
   * @param {String} [opts.customsubject]
   * @param {String} [opts.custommessage]
   * @param {String} [opts.customconsts] Base64 encoded serialized string of custom message constiables
   */
  sendEmail (id, opts) {
    const options = {
      action: 'sendemail',
      id: id
    }

    Object.assign(options, opts)

    return this.callApi(options)
  }
  /**
   * Get customer domains - http://docs.whmcs.com/API:Get_Clients_Domains
   * @param {Object} [opts]
   * @param {String} [opts.clientid]
   * @param {String} [opts.domainid]
   * @param {String} [opts.domain]
   * @param {String} [opts.limitstart] Used for pagination
   * @param {String} [opts.limitnum] Number of records to retrieve. Default = 25
   * @param {Boolean} [opts.getnameservers]
   */
  getCustomerDomains (clientid, opts) {
    const options = {
      action: 'getclientsdomains',
      clientid: clientid
    }

    Object.assign(options, opts)

    return this.callApi(options)
  }
  /**
   * Get emails - http://docs.whmcs.com/API:Get_Emails
   * @param {String} clientid
   * @param {Object} [opts]
   * @param {String} [opts.date] Can be YYYYMMDD, YYYYMM, MMDD, DD or MM
   * @param {String} [opts.subject]
   * @param {String} [opts.limitstart] where to start the records. Used for pagination
   * @param {String} [opts.limitnum] the number of records to retrieve. Default = 25
   */
  getCustomerEmails (clientid, opts) {
    const options = {
      action: 'getemails',
      clientid: clientid
    }

    Object.assign(options, opts)

    return this.callApi(options)
  }
  /**
   * Get invoices - http://docs.whmcs.com/API:Get_Invoices
   * @param {Object} [opts]
   * @param {String} [opts.userid]
   * @param {String} [opts.status] Paid, Unpaid, Cancelled, Overdue, etc.
   * @param {String} [opts.limitstart] where to start the records. Used for pagination
   * @param {String} [opts.limitnum] the number of records to retrieve. Default = 25
   */
  getCustomerInvoices (userid, opts) {
    const options = {
      action: 'getinvoices',
      userid: userid
    }

    Object.assign(options, opts)

    return this.callApi(options)
  }
  /**
   * Get customer orders - http://docs.whmcs.com/API:Get_Orders
   * @param {Object} [opts]
   * @param {String} [opts.userid]
   * @param {String} [opts.status] Paid, Unpaid, Cancelled, Overdue, etc.
   * @param {String} [opts.limitstart] where to start the records. Used for pagination
   * @param {String} [opts.limitnum] the number of records to retrieve. Default = 25
   */
  getCustomerOrders (opts) {
    const options = {
      action: 'getorders'
    }

    Object.assign(options, opts)

    return this.callApi(options)
  }
  /**
   * Validate login - http://docs.whmcs.com/API:Validate_Login
   * @param {String} email
   * @param {String} password
   */
  validateLogin (email, password) {
    const options = {
      action: 'validatelogin',
      email: email,
      password2: password
    }

    return this.callApi(options)
  }
  /**
   * Obtain the Clients Product Addons that match passed criteria - https://developers.whmcs.com/api-reference/getclientsaddons/
   * @param {Object} [opts]
   * @param {Int} [opts.serviceid] - The service id(s) to obtain the client product addons for. Single number or comma separated list
   * @param {Int} [opts.clientid] - The client to obtain the client product addons for
   * @param {Int} [opts.addonid] - The predefined addon id to obtain the client product addons for
   */
  getClientsAddons (opts) {
    const options = {
      action: 'GetClientsAddons'
    }

    Object.assign(options, opts)

    return this.callApi(options)
  }
  /**
   * Obtain quotes matching the passed criteria - https://developers.whmcs.com/api-reference/getquotes/
   * @param {Object} [opts]
   * @param {Int} [opts.limitstart] - The offset for the returned quote data (default: 0)
   * @param {Int} [opts.limitnum] - The number of records to return (default: 25)
   * @param {Int} [opts.quoteid] - Obtain a specific quote id
   * @param {Int} [opts.userid] - Find quotes for a specific client id
   * @param {String} [opts.subject] - Find quotes for a specific subject
   * @param {String} [opts.stage] - Find quotes for a specific stage (‘Draft’,‘Delivered’,‘On Hold’,‘Accepted’,‘Lost’,‘Dead’)
   * @param {String} [opts.datecreated] - Find quotes for a specific created date. Format: Y-m-d
   * @param {String} [opts.lastmodified] - Find quotes for a specific last modified date. Format: Y-m-d
   * @param {String} [opts.validuntil] - Find quotes for a specific valid until date. Format: Y-m-d
   */
  getQuotes (opts) {
    const options = {
      action: 'GetQuotes'
    }

    Object.assign(options, opts)

    return this.callApi(options)
  }
  /**
   * Obtain transactions matching the passed criteria - https://developers.whmcs.com/api-reference/gettransactions/
   * @param {Object} [opts]
   * @param {Int} [opts.invoiceid] - Obtain transactions for a specific invoice id
   * @param {Int} [opts.clientid] - Find transactions for a specific client id
   * @param {String} [opts.transid] - Find transactions for a specific transaction id
   */
  getTransactions (opts) {
    const options = {
      action: 'GetTransactions'
    }

    Object.assign(options, opts)

    return this.callApi(options)
  }
}

module.exports = Customers
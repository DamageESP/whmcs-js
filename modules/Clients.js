const WHMCS = require('../whmcs')

/**
 * Allows you to manage your clients module in WHMCS.
 * @extends WHMCS
 */
class Clients extends WHMCS {
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
	* Obtain the Clients that match passed criteria - https://developers.whmcs.com/api-reference/getclients/
	* @param {Object} opts
	* @param {Number} [opts.limitstart] The offset for the returned log data (default: 0)
	* @param {Number} [opts.limitnum] The number of records to return (default: 25)
	* @param {String} [opts.sorting] The direction to sort the results. ASC or DESC. Default: ASC
	* @param {String} [opts.search] The search term to look for at the start of email, firstname, lastname, fullname or companyname
	*/
	getClients (opts) {
		const options = {
			action: 'GetClients',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Obtain the Client Contacts that match passed criteria - https://developers.whmcs.com/api-reference/getcontacts/
	* @param {Object} opts
	* @param {Number} [opts.limitstart] The offset for the returned log data (default: 0)
	* @param {Number} [opts.limitnum] The number of records to return (default: 25)
	* @param {Number} [opts.userid] Find contacts for a specific client id
	* @param {String} [opts.firstname] Find contacts with a specific first name
	* @param {String} [opts.lastname] Find contacts with a specific last name
	* @param {String} [opts.companyname] Find contacts with a specific company name
	* @param {String} [opts.email] Find contacts with a specific email address
	* @param {String} [opts.address1] Find contacts with a specific address line 1
	* @param {String} [opts.address2] Find contacts with a specific address line 2
	* @param {String} [opts.city] Find contacts with a specific city
	* @param {String} [opts.state] Find contacts with a specific state
	* @param {String} [opts.postcode] Find contacts with a specific post/zip code
	* @param {String} [opts.country] Find contacts with a specific country
	* @param {String} [opts.phonenumber] Find contacts with a specific phone number
	* @param {Boolean} [opts.subaccount] Search for sub-accounts
	*/
	getContacts (opts) {
		const options = {
			action: 'GetContacts',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Adds a contact to a client account. - https://developers.whmcs.com/api-reference/addcontact/
	* @param {Object} opts
	* @param {Number} opts.clientid 
	* @param {String} [opts.firstname] 
	* @param {String} [opts.lastname] 
	* @param {String} [opts.companyname] 
	* @param {String} [opts.email] Email address to identify the contact. This should be unique if the contact will be a sub-account
	* @param {String} [opts.address1] 
	* @param {String} [opts.address2] 
	* @param {String} [opts.city] 
	* @param {String} [opts.state] 
	* @param {String} [opts.postcode] 
	* @param {String} [opts.country] 2 character ISO country code
	* @param {String} [opts.phonenumber] 
	* @param {String} [opts.tax_id] 
	* @param {String} [opts.password2] if creating a sub-account
	* @param {Boolean} [opts.generalemails] set true to receive general email types
	* @param {Boolean} [opts.productemails] set true to receive product related emails
	* @param {Boolean} [opts.domainemails] set true to receive domain related emails
	* @param {Boolean} [opts.invoiceemails] set true to receive billing related emails
	* @param {Boolean} [opts.supportemails] set true to receive support ticket related emails
	* @param {String} [opts.permissions] A comma separated list of sub-account permissions. eg manageproducts,managedomains
	*/
	addContact (opts) {
		const options = {
			action: 'AddContact',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Obtain a list of emails sent to a specific Client ID - https://developers.whmcs.com/api-reference/getemails/
	* @param {Object} opts
	* @param {Number} opts.clientid The Client ID to retrieve the emails for
	* @param {Number} [opts.limitstart] The offset for the returned log data (default: 0)
	* @param {Number} [opts.limitnum] The number of records to return (default: 25)
	* @param {String} [opts.date] The date to retrieve emails for.
	* @param {String} [opts.subject] The subject to retrieve emails for - uses approximate string matching.
	*/
	getEmails (opts) {
		const options = {
			action: 'GetEmails',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Obtain an array of client groups - https://developers.whmcs.com/api-reference/getclientgroups/
	* @param {Object} opts
	*/
	getClientGroups (opts) {
		const options = {
			action: 'GetClientGroups',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Adds a client. - https://developers.whmcs.com/api-reference/addclient/
	* @param {Object} opts
	* @param {String} opts.firstname 
	* @param {String} opts.lastname 
	* @param {String} [opts.companyname] 
	* @param {String} opts.email 
	* @param {String} opts.address1 
	* @param {String} [opts.address2] 
	* @param {String} opts.city 
	* @param {String} opts.state 
	* @param {String} opts.postcode 
	* @param {String} opts.country 2 character ISO country code
	* @param {String} opts.phonenumber 
	* @param {String} [opts.tax_id] The client Tax ID
	* @param {String} opts.password2 
	* @param {Number} [opts.securityqid] Security Question ID from tbladminsecurityquestions
	* @param {String} [opts.securityqans] Security Question Answer
	* @param {String} [opts.cardtype] Credit card type. Provide full name: Visa, Mastercard, American Express, etc…
	* @param {String} [opts.cardnum] Credit card number
	* @param {String} [opts.expdate] Format: MMYY
	* @param {String} [opts.startdate] Format: MMYY (if applicable)
	* @param {String} [opts.issuenumber] Credit card issue number (if applicable)
	* @param {String} [opts.cvv] Credit card CVV number (will not be stored)
	* @param {Number} [opts.currency] Currency ID from tblcurrencies
	* @param {Number} [opts.groupid] Client Group ID from tblclientgroups
	* @param {String} [opts.customfields] Base64 encoded serialized array of custom field values
	* @param {String} [opts.language] Default language setting. Provide full name: ‘english’, ‘french’, etc…
	* @param {String} [opts.clientip] IP address of the user
	* @param {String} [opts.notes] Admin only notes
	* @param {Boolean} [opts.marketingoptin] Set true to opt client in to marketing emails
	* @param {Boolean} [opts.noemail] Pass as true to skip sending welcome email
	* @param {Boolean} [opts.skipvalidation] Pass as true to ignore required fields validation
	*/
	addClient (opts) {
		const options = {
			action: 'AddClient',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Starts the password reset process for a client or contact. - https://developers.whmcs.com/api-reference/resetpassword/
	* @param {Object} opts
	* @param {Number} [opts.id] The id of the client to reset. The id can only belong to a client.
	* @param {String} [opts.email] The email address of the client or contact to update. Either $id or $email is required
	* @param {String} [opts.answer] The answer to the client security question if appropriate
	*/
	resetPassword (opts) {
		const options = {
			action: 'ResetPassword',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Obtain the Clients Product Addons that match passed criteria - https://developers.whmcs.com/api-reference/getclientsaddons/
	* @param {Object} opts
	* @param {Number} [opts.serviceid] string
	* @param {Number} [opts.clientid] The client to obtain the client product addons for
	* @param {Number} [opts.addonid] The predefined addon id to obtain the client product addons for
	*/
	getClientsAddons (opts) {
		const options = {
			action: 'GetClientsAddons',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Obtain an array of cancellation requests - https://developers.whmcs.com/api-reference/getcancelledpackages/
	* @param {Object} opts
	* @param {Number} [opts.limitstart] The offset for the returned cancellation request data (default: 0)
	* @param {Number} [opts.limitnum] The number of records to return (default: 25)
	*/
	getCancelledPackages (opts) {
		const options = {
			action: 'GetCancelledPackages',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Obtain the encrypted client password - https://developers.whmcs.com/api-reference/getclientpassword/
	* @param {Object} opts
	* @param {Number} [opts.userid] The userid to obtain the password for
	* @param {String} [opts.email] The email address to obtain the password for
	*/
	getClientPassword (opts) {
		const options = {
			action: 'GetClientPassword',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Obtain a list of Client Purchased Domains matching the provided criteria - https://developers.whmcs.com/api-reference/getclientsdomains/
	* @param {Object} opts
	* @param {Number} [opts.limitstart] The offset for the returned log data (default: 0)
	* @param {Number} [opts.limitnum] The number of records to return (default: 25)
	* @param {Number} [opts.clientid] The client id to obtain the details for.
	* @param {Number} [opts.domainid] The specific domain id to obtain the details for
	* @param {String} [opts.domain] The specific domain to obtain the details for
	*/
	getClientsDomains (opts) {
		const options = {
			action: 'GetClientsDomains',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Obtain a list of Client Purchased Products matching the provided criteria - https://developers.whmcs.com/api-reference/getclientsproducts/
	* @param {Object} opts
	* @param {Number} [opts.limitstart] The offset for the returned log data (default: 0)
	* @param {Number} [opts.limitnum] The number of records to return (default: 25)
	* @param {Number} [opts.clientid] The client id to obtain the details for.
	* @param {Number} [opts.serviceid] The specific service id to obtain the details for
	* @param {Number} [opts.pid] The specific product id to obtain the details for
	* @param {String} [opts.domain] The specific domain to obtain the service details for
	* @param {String} [opts.username2] The specific username to obtain the details for
	*/
	getClientsProducts (opts) {
		const options = {
			action: 'GetClientsProducts',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Removes client record and all associated data. This action cannot be undone. - https://developers.whmcs.com/api-reference/deleteclient/
	* @param {Object} opts
	* @param {Number} opts.clientid The client id to be deleted
	*/
	deleteClient (opts) {
		const options = {
			action: 'DeleteClient',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Removes contact record. This action cannot be undone. - https://developers.whmcs.com/api-reference/deletecontact/
	* @param {Object} opts
	* @param {Number} opts.contactid The contact id to be deleted
	*/
	deleteContact (opts) {
		const options = {
			action: 'DeleteContact',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Updates a contact with the passed parameters. - https://developers.whmcs.com/api-reference/updatecontact/
	* @param {Object} opts
	* @param {Number} opts.contactid The id of the contact to update
	* @param {Boolean} [opts.subaccount] Is the contact a subaccount
	* @param {String} [opts.firstname] 
	* @param {String} [opts.lastname] 
	* @param {String} [opts.companyname] 
	* @param {String} [opts.email] 
	* @param {String} [opts.address1] 
	* @param {String} [opts.address2] 
	* @param {String} [opts.city] 
	* @param {String} [opts.state] 
	* @param {String} [opts.postcode] 
	* @param {String} [opts.country] 2 character ISO country code
	* @param {String} [opts.phonenumber] 
	* @param {String} [opts.password2] (sub-account only)
	* @param {Boolean} [opts.generalemails] Should the contact receive general emails
	* @param {Boolean} [opts.productemails] Should the contact receive product emails
	* @param {Boolean} [opts.domainemails] Should the contact receive domain emails
	* @param {Boolean} [opts.invoiceemails] Should the contact receive invoice emails
	* @param {Boolean} [opts.supportemails] Should the contact receive support emails
	* @param {String} [opts.permissions] A comma separated list of sub-account permissions. eg manageproducts,managedomains
	*/
	updateContact (opts) {
		const options = {
			action: 'UpdateContact',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* This will close the client, cancel any invoices and set the status of all products to Cancelled or Terminated. - https://developers.whmcs.com/api-reference/closeclient/
	* @param {Object} opts
	* @param {Number} opts.clientid The ID of the client to close
	*/
	closeClient (opts) {
		const options = {
			action: 'CloseClient',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Updates a client with the passed parameters. - https://developers.whmcs.com/api-reference/updateclient/
	* @param {Object} opts
	* @param {Number} [opts.clientid] The id of the client to update
	* @param {String} [opts.clientemail] The email address of the client to update. Either $clientid or $clientemail is required
	* @param {String} [opts.firstname] 
	* @param {String} [opts.lastname] 
	* @param {String} [opts.companyname] 
	* @param {String} [opts.email] 
	* @param {String} [opts.address1] 
	* @param {String} [opts.address2] 
	* @param {String} [opts.city] 
	* @param {String} [opts.state] 
	* @param {String} [opts.postcode] 
	* @param {String} [opts.country] 2 character ISO country code
	* @param {String} [opts.phonenumber] 
	* @param {String} [opts.password2] 
	* @param {Number} [opts.securityqid] Security Question ID from tbladminsecurityquestions
	* @param {String} [opts.securityqans] Security Question Answer
	* @param {String} [opts.cardtype] Credit card type. Provide full name: Visa, Mastercard, American Express, etc…
	* @param {String} [opts.cardnum] Credit card number
	* @param {String} [opts.expdate] Format: MMYY
	* @param {String} [opts.startdate] Format: MMYY (if applicable)
	* @param {String} [opts.issuenumber] Credit card issue number (if applicable)
	* @param {String} [opts.bankcode] Client Bank Account Code (if applicable)
	* @param {String} [opts.bankacct] Client bank Account number (if applicable)
	* @param {String} [opts.cvv] Credit card CVV number (will not be stored)
	* @param {Number} [opts.currency] Currency ID from tblcurrencies
	* @param {Number} [opts.groupid] Client Group ID from tblclientgroups
	* @param {String} [opts.customfields] Base64 encoded serialized array of custom field values
	* @param {String} [opts.language] Default language setting. Provide full name: ‘english’, ‘french’, etc…
	* @param {String} [opts.clientip] IP address of the user
	* @param {String} [opts.notes] Admin only notes
	* @param {String} [opts.status] Status, e.g. “Active”
	* @param {String} [opts.paymentmethod] The default payment method
	* @param {Boolean} [opts.marketingoptin] Set true to opt client in to marketing emails
	* @param {Boolean} [opts.clearcreditcard] Pass as true to clear the stored CC details
	* @param {Boolean} [opts.skipvalidation] Pass as true to ignore required fields validation
	*/
	updateClient (opts) {
		const options = {
			action: 'UpdateClient',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Note this function returns the client information in the top level array. This information
is deprecated and may be removed in a future version of WHMCS. - https://developers.whmcs.com/api-reference/getclientsdetails/
	* @param {Object} opts
	* @param {Number} [opts.clientid] The client id to obtain the details for. $clientid or $email is required
	* @param {String} [opts.email] The email address of the client to search for
	* @param {Boolean} [opts.stats] Also return additional client statistics.
	*/
	getClientsDetails (opts) {
		const options = {
			action: 'GetClientsDetails',
			...opts
		}
		return this.callApi(options)
	}
}

module.exports = Clients

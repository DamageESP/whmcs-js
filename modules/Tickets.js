const WHMCS = require('../whmcs')

/**
 * Allows you to manage your Tickets module in WHMCS.
 * @extends WHMCS
 */
class Tickets extends WHMCS {
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
	* Obtain a specific ticket - https://developers.whmcs.com/api-reference/getticket/
	* @param {Object} opts
	* @param {String} [opts.ticketnum] Obtain the ticket for the specific Client Ticket Number
	* @param {Number} [opts.ticketid] Obtain the ticket for the specific ticket id (Either $ticketnum or $ticketid is required)
	* @param {String} [opts.repliessort] ASC or DESC. Which order to organise the ticket replies
	*/
	getTicket (opts) {
		const options = {
			action: 'GetTicket',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Get the support statuses and number of tickets in each status - https://developers.whmcs.com/api-reference/getsupportstatuses/
	* @param {Object} opts
	* @param {Number} [opts.deptid] Obtain counts for a specific department id
	*/
	getSupportStatuses (opts) {
		const options = {
			action: 'GetSupportStatuses',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Obtain a specific ticket notes - https://developers.whmcs.com/api-reference/getticketnotes/
	* @param {Object} opts
	* @param {Number} opts.ticketid Obtain the ticket for the specific ticket id
	*/
	getTicketNotes (opts) {
		const options = {
			action: 'GetTicketNotes',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Get ticket counts. - https://developers.whmcs.com/api-reference/getticketcounts/
	* @param {Object} opts
	* @param {Boolean} [opts.ignoreDepartmentAssignments] Pass as true to not adhere to the departments the API user is a member of.
	* @param {Boolean} [opts.includeCountsByStatus] Pass as true to not adhere to the departments the API user is a member of.
	*/
	getTicketCounts (opts) {
		const options = {
			action: 'GetTicketCounts',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Obtain the Predefined Ticket Reply Categories - https://developers.whmcs.com/api-reference/getticketpredefinedcats/
	* @param {Object} opts
	*/
	getTicketPredefinedCats (opts) {
		const options = {
			action: 'GetTicketPredefinedCats',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Get the support departments and associated ticket counts - https://developers.whmcs.com/api-reference/getsupportdepartments/
	* @param {Object} opts
	* @param {Boolean} [opts.ignore_dept_assignments] Pass as true to not adhere to the departments the API user is a member of.
	*/
	getSupportDepartments (opts) {
		const options = {
			action: 'GetSupportDepartments',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Obtain the Predefined Ticket Replies - https://developers.whmcs.com/api-reference/getticketpredefinedreplies/
	* @param {Object} opts
	* @param {Number} [opts.catid] Obtain predefined replies for a specific category id
	*/
	getTicketPredefinedReplies (opts) {
		const options = {
			action: 'GetTicketPredefinedReplies',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Obtain tickets matching the passed criteria - https://developers.whmcs.com/api-reference/gettickets/
	* @param {Object} opts
	* @param {Number} [opts.limitstart] The offset for the returned quote data (default: 0)
	* @param {Number} [opts.limitnum] The number of records to return (default: 25)
	* @param {Number} [opts.deptid] Obtain tickets in a specific department
	* @param {Number} [opts.clientid] Find tickets for a specific client id
	* @param {String} [opts.email] Find tickets for a specific non-client email address
	* @param {String} [opts.status] Find tickets matching a specific status. Any configured status plus: Awaiting Reply, All Active Tickets, My Flagged Tickets
	* @param {String} [opts.subject] Find tickets containing a specific subject - uses approximate string matching.
	* @param {Boolean} [opts.ignore_dept_assignments] Pass as true to not adhere to the departments the API user is a member of.
	*/
	getTickets (opts) {
		const options = {
			action: 'GetTickets',
			...opts
		}
		return this.callApi(options)
	}
}

module.exports = Tickets

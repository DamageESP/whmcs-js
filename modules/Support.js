const WHMCS = require('../whmcs')

/**
 * Allows you to manage your support module in WHMCS.
 * @extends WHMCS
 */
class Support extends WHMCS {
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
   * Adds an announcement. - https://developers.whmcs.com/api-reference/addannouncement/
   * @param {Object} opts
   * @param {String} opts.date Date in the format YYYY-MM-DD HH:MM:SS
   * @param {String} opts.title 
   * @param {String} opts.announcement Announcement text
   * @param {Boolean} [opts.published] Pass as true to publish
   */
  addAnouncement (opts) {
    const options = {
      action: 'AddAnouncement',
      ...opts
    }
    return this.callApi(options)
  }
  /**
	* Adds a Cancellation Request - https://developers.whmcs.com/api-reference/addcancelrequest/
	* @param {Object} opts
	* @param {Number} opts.serviceid The Service ID to cancel
	* @param {String} [opts.type] The type of cancellation. ‘Immediate’ or ‘End of Billing Period’
	* @param {String} [opts.reason] The customer reason for cancellation
	*/
	addCancelRequest (opts) {
		const options = {
			action: 'AddCancelRequest',
			...opts
		}
		return this.callApi(options)
  }
  /**
	* Adds a Client Note - https://developers.whmcs.com/api-reference/addclientnote/
	* @param {Object} opts
	* @param {Number} opts.userid The Client ID to apply the note to
	* @param {String} opts.notes The note to add
	* @param {Boolean} [opts.sticky] Should the note be made sticky. Makes the note ‘sticky’ and displays the note throughout the client’s account and on any tickets they submit in the admin area
	*/
	addClientNote (opts) {
		const options = {
			action: 'AddClientNote',
			...opts
		}
		return this.callApi(options)
  }
  /**
	* Add a note to a ticket by Ticket ID or Ticket Number. - https://developers.whmcs.com/api-reference/addticketnote/
	* @param {Object} opts
	* @param {String} opts.message The content of the ticket note
	* @param {String} [opts.ticketnum] The Client Ticket Number ID to apply the note to
	* @param {Number} [opts.ticketid] The id of the ticket in the database. Either $ticketnum or $ticketid is required
	* @param {Boolean} [opts.markdown] Should markdown be used on the ticket note output
	* @param {Array} [opts.attachments] Optional base64 json encoded array of file attachments. Can be the direct output of a multipart-form-data form submission ($_FILES superglobal in PHP) or an array of arrays consisting of both a filename and data keys (see example below).
	*/
	addTicketNote (opts) {
		const options = {
			action: 'AddTicketNote',
			...opts
		}
		return this.callApi(options)
  }
  /**
	* Add a reply to a ticket by Ticket ID. - https://developers.whmcs.com/api-reference/addticketreply/
	* @param {Object} opts
	* @param {Number} opts.ticketid The id of the ticket in the database. Either $ticketnum or $ticketid is required
	* @param {String} opts.message The content of the ticket reply
	* @param {Boolean} [opts.markdown] Should markdown be used on the ticket reply output
	* @param {Number} [opts.clientid] Pass a clientid to associate the ticket reply with a specific client
	* @param {Number} [opts.contactid] Pass a contactid to associate the ticket reply with a specific contact belonging to $clientid
	* @param {String} [opts.adminusername] The admin username to associate the ticket reply with
	* @param {String} [opts.name] The name to associate with the ticket reply if not an admin or client response
	* @param {String} [opts.email] The email to associate with the ticket reply if not an admin or client response
	* @param {String} [opts.status] The status to set on the ticket after the reply is made if the default status on admin/client response is not required. See GetSupportStatuses API command
	* @param {Boolean} [opts.noemail] Set to true to stop the ticket reply email being sent
	* @param {String} [opts.customfields] A base64 encoded array of the custom fields to update
	* @param {Array} [opts.attachments] Optional base64 json encoded array of file attachments. Can be the direct output of a multipart-form-data form submission ($_FILES superglobal in PHP) or an array of arrays consisting of both a filename and data keys (see example below).
	*/
	addTicketReply (opts) {
		const options = {
			action: 'AddTicketReply',
			...opts
		}
		return this.callApi(options)
  }
  /**
	* Delete an announcement - https://developers.whmcs.com/api-reference/deleteannouncement/
	* @param {Object} opts
	* @param {Number} opts.announcementid The id of the announcement to be deleted
	*/
	deleteAnnouncement (opts) {
		const options = {
			action: 'DeleteAnnouncement',
			...opts
		}
		return this.callApi(options)
  }
  /**
	* Removes a ticket and all replies from the system. This cannot be undone. - https://developers.whmcs.com/api-reference/deleteticket/
	* @param {Object} opts
	* @param {Number} opts.ticketid The ticket to be deleted
	*/
	deleteTicket (opts) {
		const options = {
			action: 'DeleteTicket ',
			...opts
		}
		return this.callApi(options)
	}
  /**
	* Removes a ticket note from the system. This cannot be undone. - https://developers.whmcs.com/api-reference/deleteticketnote/
	* @param {Object} opts
	* @param {Number} opts.noteid The ticket note to be deleted
	*/
	deleteTicketNote (opts) {
		const options = {
			action: 'DeleteTicketNote ',
			...opts
		}
		return this.callApi(options)
  }
  /**
	* Obtain an array of announcements - https://developers.whmcs.com/api-reference/getannouncements/
	* @param {Object} opts
	* @param {Number} [opts.limitstart] The offset for the returned announcement data (default: 0)
	* @param {Number} [opts.limitnum] The number of records to return (default: 25)
	*/
	getAnnouncements (opts) {
		const options = {
			action: 'GetAnnouncements',
			...opts
		}
		return this.callApi(options)
  }
  /**
	* Open a new ticket - https://developers.whmcs.com/api-reference/openticket/
	* @param {Object} opts
	* @param {Number} opts.deptid The department to open the ticket in
	* @param {String} opts.subject The subject of the ticket
	* @param {String} opts.message The message of the ticket
	* @param {Number} [opts.clientid] If applicable, the Client ID to create the ticket for.
	* @param {Number} [opts.contactid] If applicable, the Contact ID to create the ticket for (only if $clientid is passed).
	* @param {String} [opts.name] The name of the person opening the ticket (if not a client)
	* @param {String} [opts.email] The email address of the person opening the ticket (if not a client)
	* @param {String} [opts.priority] The priority of the ticket (‘Low’, ‘Medium’, ‘High’)
	* @param {Number} [opts.serviceid] The service to associate the ticket with (only one of $serviceid or $domainid)
	* @param {Number} [opts.domainid] The domain to associate the ticket with (only one of $serviceid or $domainid)
	* @param {Boolean} [opts.admin] Is an Admin opening the ticket
	* @param {Boolean} [opts.markdown] Should markdown be used on the ticket output
	* @param {String} [opts.customfields] Base64 encoded serialized array of custom field values
	* @param {Array} [opts.attachments] Optional base64 json encoded array of file attachments. Can be the direct output of a multipart-form-data form submission ($_FILES superglobal in PHP) or an array of arrays consisting of both a filename and data keys (see example below).
	*/
	openTicket (opts) {
		const options = {
			action: 'OpenTicket',
			...opts
		}
		return this.callApi(options)
  }
  /**
	* Updates an existing ticket - https://developers.whmcs.com/api-reference/updateticket/
	* @param {Object} opts
	* @param {Number} opts.ticketid The ticket Id to update
	* @param {Number} [opts.deptid] The department id of the ticket
	* @param {String} [opts.status] The status of the ticket
	* @param {String} [opts.subject] The subject of the ticket
	* @param {Number} [opts.userid] If applicable, the Client ID to update the ticket for.
	* @param {String} [opts.name] The name of the person opening the ticket (if not a client)
	* @param {String} [opts.email] The email address of the person opening the ticket (if not a client)
	* @param {String} [opts.cc] The cc email addresses for the ticket
	* @param {String} [opts.priority] The priority of the ticket (‘Low’, ‘Medium’, ‘High’)
	* @param {Number} [opts.flag] The id of the admin to flag the ticket to
	* @param {Boolean} [opts.removeFlag] Remove the flag from the ticket
	* @param {String} [opts.message] Update the ticket message
	* @param {Boolean} [opts.markdown] Should markdown be used on the ticket output.
	* @param {String} [opts.customfields] Base64 encoded serialized array of custom field values
	*/
	updateTicket (opts) {
		const options = {
			action: 'UpdateTicket',
			...opts
		}
		return this.callApi(options)
  }
  /**
	* Updates a ticket reply message. - https://developers.whmcs.com/api-reference/updateticketreply/
	* @param {Object} opts
	* @param {Number} opts.replyid The reply id to update.
	* @param {String} opts.message The message to be updated
	* @param {Boolean} [opts.markdown] Should markdown be used on the ticket message. Existing value is used if not supplied.
	*/
	updateTicketReply (opts) {
		const options = {
			action: 'UpdateTicketReply',
			...opts
		}
		return this.callApi(options)
	}
}

module.exports = Support

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
   * Open ticket - http://docs.whmcs.com/API:Open_Ticket
   * @param {String|Number} clientid
   * @param {Number} deptid
   * @param {String} subject
   * @param {String} message
   * @param {Object} [opts]
   * @param {String} [opts.priority] Low, Medium, High, etc. (Default = Low)
   * @param {String|Number} [opts.contactid] ID of the contact to associate the ticket with
   * @param {String} [opts.name] Required if not a registered client (clientid must be set to 0)
   * @param {String} [opts.email] Rquired if not a registered client
   * @param {String} [opts.admin]
   * @param {String} [opts.serviceid]
   * @param {String} [opts.domainid]
   * @param {String} [opts.customfields] Base 64 serialized array of field IDs => values
   * @param {Boolean} [opts.noemail]
   */
  openTicket (clientid, deptid, subject, message, opts) {
    const options = {
      action: 'openticket',
      clientid: clientid,
      deptid,
      subject,
      message
    }

    Object.assign(options, opts)

    return this.callApi(options)
  }

  /**
  * Delete ticket - http://docs.whmcs.com/API:Delete_Ticket
  * @param {String|Number} ticketid
  */
  deleteTicket (ticketid) {
    const options = {
      action: 'deleteticket',
      ticketid
    }

    return this.callApi(options)
  }

  /**
   * Get ticket - http://docs.whmcs.com/API:Get_Ticket
   * @param {String|Number} ticketid
   */
  getTicket (ticketid) {
    const options = {
      action: 'getticket',
      ticketid
    }

    return this.callApi(options)
  }

  /**
   * Reply to ticket - http://docs.whmcs.com/API:Reply_Ticket
   * @param {String|Number} ticketid
   * @param {String} message
   * @param {Object} [opts]
   * @param {String|Number} [opts.clientid] Required if adding reply as a client
   * @param {String|Number} [opts.contactid] ID of contact for client if replying as a client
   * @param {String} [opts.name] Required to be set to 0 if not a registered client
   * @param {String} [opts.email] Required if not a registered client
   * @param {String} [opts.adminusername] Name to show on message
   * @param {String} [opts.status]
   * @param {String} [opts.customfields] Base64 encoded serialized array of custom fields
   */
  replyTicket (ticketid, message, opts) {
    const options = {
      action: 'addticketreply',
      ticketid,
      message
    }

    Object.assign(options, opts)

    if(!options.adminusername && !options.clientid){
      options.adminusername = 'Auto-response'
    }

    return this.callApi(options)
  }

  /**
  * Get tickets - http://docs.whmcs.com/API:Get_Tickets
  * @param {Object} [opts]
  * @param {String} [opts.limitstart] where to start the records. Used for pagination
  * @param {String} [opts.limitnum] the number of records to retrieve. Default = 25
  * @param {String} [opts.clientid]
  * @param {String} [opts.email]
  * @param {String} [opts.deptid]
  * @param {String} [opts.status]
  * @param {String} [opts.subject]
  * @param [opts.ignore_dept_assignments] Boolean
  */
  getTickets (opts) {
    const options = {
      action: 'gettickets'
    }

    Object.assign(options, opts)

    return this.callApi(options)
  }

  /**
  * Update ticket - http://docs.whmcs.com/API:Update_Ticket
  * @param {Object} opts
  * @param {String} opts.ticketid ID of the ticket to update
  * @param {String} [opts.deptid] Update the assigned department
  * @param {String} [opts.subject] Update the subject of the ticket
  * @param {String} [opts.priority] Low, Medium, High
  * @param {String} [opts.status] Open, Answered, Closed, etc.
  * @param {String} [opts.userid] Change the user that the ticket is assigned to
  * @param {String} [opts.email] Change the email address that opened the ticket (only when userid is not used)
  * @param {String} [opts.cc] Add CC emails to the ticket
  * @param {String} [opts.flag] Flag to an adminid
  */
  updateTicket (opts) {
    const options = {
      action: 'updateticket'
    }

    Object.assign(options, opts)

    return this.callApi(options)
  }
}

module.exports = Support
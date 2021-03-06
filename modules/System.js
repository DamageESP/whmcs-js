const WHMCS = require('../whmcs')

class System extends WHMCS {
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
	* Encrypting the same string twice will return different values. You will need to decrypt an encrypted string to compare values. - https://developers.whmcs.com/api-reference/encryptpassword/
	* @param {Object} opts
	* @param {String} opts.password2 The string to encrypt
	*/
	encryptPassword (opts) {
		const options = {
			action: 'EncryptPassword',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Get Automation Task Log. - https://developers.whmcs.com/api-reference/getautomationlog/
	* @param {Object} opts
	* @param {String} [opts.startdate] Defaults to today
	* @param {String} [opts.enddate] Defaults to today
	* @param {String} [opts.namespace] Optional filter for a specific namespace
	*/
	getAutomationLog (opts) {
		const options = {
			action: 'GetAutomationLog',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Obtain the Currencies configured in the System - https://developers.whmcs.com/api-reference/getcurrencies/
	* @param {Object} opts
	*/
	getCurrencies (opts) {
		const options = {
			action: 'GetCurrencies',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Obtain a list of email templates from the system - https://developers.whmcs.com/api-reference/getemailtemplates/
	* @param {Object} opts
	* @param {String} [opts.type] The type of email template to retrieve
	* @param {String} [opts.language] The language of the email template to retrieve, if none provided will return default language templates.
	*/
	getEmailTemplates (opts) {
		const options = {
			action: 'GetEmailTemplates',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Retrieve Activated Payment Methods - https://developers.whmcs.com/api-reference/getpaymentmethods/
	* @param {Object} opts
	*/
	getPaymentMethods (opts) {
		const options = {
			action: 'GetPaymentMethods',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Obtain the details for the current Admin User - https://developers.whmcs.com/api-reference/getadmindetails/
	* @param {Object} opts
	*/
	getAdminDetails (opts) {
		const options = {
			action: 'GetAdminDetails',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Retrieve a list of administrator user accounts. - https://developers.whmcs.com/api-reference/getadminusers/
	* @param {Object} opts
	* @param {Number} [opts.roleid] An administrative role ID to filter for.
	* @param {String} [opts.email] An email address to filter for. Partial matching supported.
	* @param {Boolean} [opts.include_disabled] Pass as true to include disabled administrator user accounts in response.
	*/
	getAdminUsers (opts) {
		const options = {
			action: 'GetAdminUsers',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Retrieve a System Configuration Value. - https://developers.whmcs.com/api-reference/getconfigurationvalue/
	* @param {Object} opts
	* @param {String} opts.setting The name of the setting to be obtained
	*/
	getConfigurationValue (opts) {
		const options = {
			action: 'GetConfigurationValue',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Adds an IP to the ban list. - https://developers.whmcs.com/api-reference/addbannedip/
	* @param {Object} opts
	* @param {String} opts.ip 
	* @param {String} opts.reason Admin only reason
	* @param {Number} opts.days If passed, expires date is auto calculated
	* @param {String} [opts.expires] YYYY-MM-DD HH:MM:SS
	*/
	addBannedIp (opts) {
		const options = {
			action: 'AddBannedIp',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Obtain the Activity Log that matches passed criteria - https://developers.whmcs.com/api-reference/getactivitylog/
	* @param {Object} opts
	* @param {Number} [opts.limitstart] The offset for the returned log data (default: 0)
	* @param {Number} [opts.limitnum] The number of records to return (default: 25)
	* @param {Number} [opts.userid] The ID of the user to obtain the log for
	* @param {String} [opts.date] The date of the activity log to retrieve in localised format (eg 01/01/2016)
	* @param {String} [opts.user] The name of the user to retrieve the log entries for
	* @param {String} [opts.description] Search the log for a specific string
	* @param {String} [opts.ipaddress] The IP Address to search the activity log for
	*/
	getActivityLog (opts) {
		const options = {
			action: 'GetActivityLog',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Creates an activity log entry. - https://developers.whmcs.com/api-reference/logactivity/
	* @param {Object} opts
	* @param {Number} [opts.userid] 
	* @param {String} opts.description 
	*/
	logActivity (opts) {
		const options = {
			action: 'LogActivity',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Retrieve a list of currently logged in admin users. - https://developers.whmcs.com/api-reference/getstaffonline/
	* @param {Object} opts
	*/
	getStaffOnline (opts) {
		const options = {
			action: 'GetStaffOnline',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Obtain To Do item statuses and counts - https://developers.whmcs.com/api-reference/gettodoitemstatuses/
	* @param {Object} opts
	*/
	getToDoItemStatuses (opts) {
		const options = {
			action: 'GetToDoItemStatuses',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Send an Admin Email Notification - https://developers.whmcs.com/api-reference/sendadminemail/
	* @param {Object} opts
	* @param {String} [opts.messagename] The name of the admin email template to send
	* @param {String} [opts.custommessage] The HTML message body to send for a custom email
	* @param {String} [opts.customsubject] The subject to send for a custom email
	* @param {String} [opts.type] Which type of admin notification will be send (‘system’, ‘account’, ‘support’)
	* @param {Number} [opts.deptid] The Id of the department the notification is for if ‘support’ $type
	* @param {Array} [opts.mergefields] The merge fields to be used in the email template
	*/
	sendAdminEmail (opts) {
		const options = {
			action: 'SendAdminEmail',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Get business performance metrics and statistics. - https://developers.whmcs.com/api-reference/getstats/
	* @param {Object} opts
	* @param {Number} [opts.timeline_days] (Optional) The number of days to retrieve timeline values for (max 90).
	*/
	getStats (opts) {
		const options = {
			action: 'GetStats',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Set a System Configuration Value via the local API only. - https://developers.whmcs.com/api-reference/setconfigurationvalue/
	* @param {Object} opts
	* @param {String} opts.setting The setting name to change
	* @param {String} opts.value The value to set. Leave value blank to unset.
	*/
	setConfigurationValue (opts) {
		const options = {
			action: 'SetConfigurationValue',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Update a specific announcement - https://developers.whmcs.com/api-reference/updateannouncement/
	* @param {Object} opts
	* @param {String} opts.announcementid The id of the announcement to update
	* @param {String} [opts.title] The title of the announcement (if required to change)
	* @param {String} [opts.announcement] The message of the announcement (if required to change)
	* @param {String} [opts.date] The date of the announcement (if required to change) (Y-m-d H:i:s)
	* @param {Boolean} [opts.published] Publish the announcement 1⁄0 (if required to change)
	*/
	updateAnnouncement (opts) {
		const options = {
			action: 'UpdateAnnouncement',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Update To-Do Item. - https://developers.whmcs.com/api-reference/updatetodoitem/
	* @param {Object} opts
	* @param {Number} [opts.itemid] The id of the To-Do item to be updated.
	* @param {Number} [opts.adminid] The admin id performing the update.
	* @param {String} [opts.status] The status of the to-do item.
	*/
	updateToDoItem (opts) {
		const options = {
			action: 'UpdateToDoItem',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Send a client Email Notification. See more details and restrictions at: - https://developers.whmcs.com/api-reference/sendemail/
	* @param {Object} opts
	* @param {String} [opts.messagename] The name of the client email template to send
	* @param {Number} [opts.id] The related id for the type of email template. Eg this should be the client id for a general type email
	* @param {String} [opts.customtype] The type of custom email template to send (‘general’, ‘product’, ‘domain’, ‘invoice’, ‘support’, ‘affiliate’)
	* @param {String} [opts.custommessage] The HTML message body to send for a custom email
	* @param {String} [opts.customsubject] The subject to send for a custom email
	* @param {Array} [opts.customvars] The custom variables to provide to the email template. Can be used for existing and custom emails.
	*/
	sendEmail (opts) {
		const options = {
			action: 'SendEmail',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Get To-Do List Items. - https://developers.whmcs.com/api-reference/gettodoitems/
	* @param {Object} opts
	* @param {Number} [opts.limitstart] The offset for the returned log data (default: 0)
	* @param {Number} [opts.limitnum] The number of records to return (default: 25)
	* @param {String} [opts.status] Status to filter for. Possible values include: Incomplete, New, Pending, In Progress, Completed
	*/
	getToDoItems (opts) {
		const options = {
			action: 'GetToDoItems',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Trigger a Custom Notification Event. - https://developers.whmcs.com/api-reference/triggernotificationevent/
	* @param {Object} opts
	* @param {String} [opts.notification_identifier] A unique identifier string, used as a condition when making a notification rule.
	* @param {String} [opts.title] The title for the notification
	* @param {String} [opts.message] The message body for the notification
	* @param {String} [opts.url] The follow up URL for the notification
	* @param {String} [opts.status] A status description for the notification
	* @param {String} [opts.statusStyle] A formatting style for the status of the notification, currently supports “success”, “danger”, and “info”
	* @param {Array} [opts.attributes] An array of Attributes to include in the notification. Requires at least label and value parameters. Other parameters are optional. See WHMCS\Notification\NotificationAttribute.
	*/
	triggerNotificationEvent (opts) {
		const options = {
			action: 'TriggerNotificationEvent',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Update the admin notes - https://developers.whmcs.com/api-reference/updateadminnotes/
	* @param {Object} opts
	* @param {String} opts.notes The new value for the admin notes
	*/
	updateAdminNotes (opts) {
		const options = {
			action: 'UpdateAdminNotes',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Decrypt an encrypted string - https://developers.whmcs.com/api-reference/decryptpassword/
	* @param {Object} opts
	* @param {String} opts.password2 The string to decrypt
	*/
	decryptPassword (opts) {
		const options = {
			action: 'DecryptPassword',
			...opts
		}
		return this.callApi(options)
	}  
}

module.exports = System

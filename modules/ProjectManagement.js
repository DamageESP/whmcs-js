const WHMCS = require('../whmcs')

/**
 * Allows you to manage your Project Management module in WHMCS.
 * @extends WHMCS
 */
class ProjectManagement extends WHMCS {
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
	* Adds a Message to a project - https://developers.whmcs.com/api-reference/addprojectmessage/
	* @param {Object} opts
	* @param {Number} opts.projectid The id of the project the message is for
	* @param {String} opts.message The message to add to the project
	* @param {Number} [opts.adminid] Override the admin id for the message. Not passing will set to the adminid of the api request
	*/
	addProjectMessage (opts) {
		const options = {
			action: 'AddProjectMessage',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Adds a Task to a project - https://developers.whmcs.com/api-reference/updateprojecttask/
	* @param {Object} opts
	* @param {Number} opts.taskid The id of the project task to update
	* @param {Number} [opts.projectid] Change the project a task is assigned to
	* @param {String} [opts.duedate] The duedate for the task. Format YYYY-mm-dd
	* @param {Number} [opts.adminid] The admin id to associate the task with
	* @param {String} [opts.task] The task title
	* @param {String} [opts.notes] The notes for the task
	* @param {Boolean} [opts.completed] Has the task been completed
	*/
	updateProjectTask (opts) {
		const options = {
			action: 'UpdateProjectTask',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Starts a timer for a project - https://developers.whmcs.com/api-reference/starttasktimer/
	* @param {Object} opts
	* @param {Number} opts.timerid The id of the task to be ended
	* @param {Number} opts.projectid The id of the project for the task timer
	* @param {Number} [opts.adminid] The admin id to associate the timer with
	* @param {Number} [opts.start_time] The start time as a unix time stamp. Defaults to time() if not provided
	* @param {Number} [opts.end_time] The start time as a unix time stamp.
	*/
	startTaskTimer (opts) {
		const options = {
			action: 'StartTaskTimer',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Updates a project - https://developers.whmcs.com/api-reference/updateproject/
	* @param {Object} opts
	* @param {Number} opts.projectid The project ID to update
	* @param {Number} [opts.adminid] The adminId the project will be associated with
	* @param {Number} [opts.userid] The user that the project is for
	* @param {String} [opts.status] The status of the project as defined in Project Management Settings
	* @param {String} [opts.created] The created date of the project in Y-m-d format
	* @param {String} [opts.duedate] The due date of the project in Y-m-d format
	* @param {Boolean} [opts.completed] Is the project completed
	* @param {String} [opts.title] The title of the project
	* @param {String} [opts.ticketids] A comma separated list of ticket IDs to associate with the project
	* @param {String} [opts.invoiceids] A comma separated list of invoice IDs to associate with the project
	* @param {String} [opts.notes] The notes to associate with the project
	*/
	updateProject (opts) {
		const options = {
			action: 'UpdateProject',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Retrieve a specific Project - https://developers.whmcs.com/api-reference/getproject/
	* @param {Object} opts
	* @param {Number} opts.projectid The project id to obtain
	*/
	getProject (opts) {
		const options = {
			action: 'GetProject',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Creates a new project - https://developers.whmcs.com/api-reference/createproject/
	* @param {Object} opts
	* @param {String} opts.title The title of the new project
	* @param {Number} opts.adminid The adminId the project will be associated with
	* @param {Number} [opts.userid] The user that the project is for
	* @param {String} [opts.status] The status of the project as defined in Project Management Settings
	* @param {String} [opts.created] The created date of the project in Y-m-d format
	* @param {String} [opts.duedate] The duedate date of the project in Y-m-d format
	* @param {Boolean} [opts.completed] Is the project completed
	* @param {String} [opts.ticketids] A comma separated list of ticket IDs to associate with the project
	* @param {String} [opts.invoiceids] A comma separated list of invoice IDs to associate with the project
	*/
	createProject (opts) {
		const options = {
			action: 'CreateProject',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Ends a started timer for a project - https://developers.whmcs.com/api-reference/endtasktimer/
	* @param {Object} opts
	* @param {Number} opts.timerid The id of the task to be ended
	* @param {Number} [opts.projectid] The id of the project for the task timer
	* @param {Number} [opts.adminid] The admin id to associate the timer with
	* @param {Number} [opts.end_time] The end time as a unix time stamp. Defaults to time() if not provided
	*/
	endTaskTimer (opts) {
		const options = {
			action: 'EndTaskTimer',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Adds a Task to a project - https://developers.whmcs.com/api-reference/addprojecttask/
	* @param {Object} opts
	* @param {Number} opts.projectid The id of the project the task is for
	* @param {String} opts.duedate The duedate for the task. Format YYYY-mm-dd
	* @param {Number} [opts.adminid] The admin id to associate the task with
	* @param {String} [opts.task] The task title
	* @param {String} [opts.notes] The notes for the task
	* @param {Boolean} [opts.completed] Has the task been completed
	* @param {Boolean} [opts.billed] Has the task been billed
	*/
	addProjectTask (opts) {
		const options = {
			action: 'AddProjectTask',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Removes a task from the system. This cannot be undone - https://developers.whmcs.com/api-reference/deleteprojecttask/
	* @param {Object} opts
	* @param {Number} opts.projectid The project that owns the task being deleted
	* @param {Number} opts.taskid The task to be deleted
	*/
	deleteProjectTask (opts) {
		const options = {
			action: 'DeleteProjectTask',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Obtain orders matching the passed criteria - https://developers.whmcs.com/api-reference/getprojects/
	* @param {Object} opts
	* @param {Number} [opts.limitstart] The offset for the returned project data (default: 0)
	* @param {Number} [opts.limitnum] The number of records to return (default: 25)
	* @param {Number} [opts.userid] Find projects for a specific client id
	* @param {String} [opts.title] Find projects with a specific title
	* @param {String} [opts.ticketids] Find projects with specific ticketids
	* @param {String} [opts.invoiceids] Find projects with specific invoiceids
	* @param {String} [opts.notes] Find projects with specific notes
	* @param {Number} [opts.adminid] Find projects assigned to a specific admin id
	* @param {String} [opts.status] Find projects with a specific status
	* @param {String} [opts.created] Find projects with a specific creation date
	* @param {String} [opts.duedate] Find projects with a specific due date
	* @param {Boolean} [opts.completed] Find projects that are/aren’t completed
	* @param {String} [opts.lastmodified] Find projects with a specific last modified date
	*/
	getProjects (opts) {
		const options = {
			action: 'GetProjects',
			...opts
		}
		return this.callApi(options)
	}
}

module.exports = ProjectManagement

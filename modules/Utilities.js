const WHMCS = require('../whmcs')

/**
 * Allows you to manage your utilities module in WHMCS.
 * @extends WHMCS
 */
class Utilities extends WHMCS {
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
  getToDoItems (status, offset, limit) {
    const options = {
      action: 'gettodoitems'
    }


    if (status) {
      options.status = status
    }
    if (offset) {
      options.limitstart = offset
    }
    if (limit) {
      options.limitnum = limit
    }

    return this.callApi(options)
  }

  getModuleQueue (moduleName, moduleAction, since) {
    const options = {
      action: 'getmodulequeue',
      moduleName,
      moduleAction,
      since
    }

    return this.callApi(options)
  }
}

module.exports = Utilities

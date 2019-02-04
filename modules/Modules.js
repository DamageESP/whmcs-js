const WHMCS = require('../whmcs')

/**
 * Allows you to manage your Modules in WHMCS.
 * @extends WHMCS
 */
class Modules extends WHMCS {
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
   * Activates a given module. - https://developers.whmcs.com/api-reference/activatemodule/
   * @param {Object} opts
   * @param {String} opts.moduleType The module type to be activated
   * @param {String} opts.moduleName The module name to be activated
   * @param {Array} [opts.parameters] An array of configuration parameters to set for the given module. Use GetModuleConfigurationParameters to obtain a list of fields for a given module.
   */
  activateModule (opts) {
    const options = {
      action: 'ActivateModule',
      ...opts
    }
    return this.callApi(options)
  }
  /**
   * Deactivates a given module. - https://developers.whmcs.com/api-reference/deactivatemodule/
   * @param {Object} opts
   * @param {String} opts.moduleType The module type to be deactivated
   * @param {String} opts.moduleName The module name to be deactivated
   */
  deactivateModule (opts) {
    const options = {
      action: 'DeactivateModule',
      ...opts
    }
    return this.callApi(options)
  }
  /**
   * Obtains the Module Configuration Parameters - https://developers.whmcs.com/api-reference/getmoduleconfigurationparameters/
   * @param {Object} opts
   * @param {String} opts.moduleType The module type to be activated
   * @param {String} opts.moduleName The module name to be activated
   */
  getModuleConfigurationParameters (opts) {
    const options = {
      action: 'GetModuleConfigurationParameters',
      ...opts
    }
    return this.callApi(options)
  }
  /**
   * Obtains the Module Queue for Incomplete Failed Actions - https://developers.whmcs.com/api-reference/getmodulequeue/
   * @param {Object} opts
   * @param {String} [opts.serviceType] The type of service to load (‘domain’, ‘service’ or “))
   * @param {String} [opts.moduleName] The module name to obtain the queue for in system format. eg cpanel
   * @param {String} [opts.moduleAction] The module action to obtain the queue for. eg CreateAccount, SuspendAccount
   * @param {String} [opts.since] The date/time since to obtain the items. Format Y-m-d Can include H:i:s
   */
  getModuleQueue (opts) {
    const options = {
      action: 'GetModuleQueue',
      ...opts
    }
    return this.callApi(options)
  }
  /**
   * Activates a given module. - https://developers.whmcs.com/api-reference/updatemoduleconfiguration/
   * @param {Object} opts
   * @param {String} opts.moduleType The module type to be activated
   * @param {String} opts.moduleName The module name to be activated
   * @param {Array} [opts.parameters] An array of configuration parameters to set for the given module. Use GetModuleConfigurationParameters to obtain a list of fields for a given module.
   */
  updateModuleConfiguration (opts) {
    const options = {
      action: 'UpdateModuleConfiguration',
      ...opts
    }
    return this.callApi(options)
  }
}

module.exports = Modules

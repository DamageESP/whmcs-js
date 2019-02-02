const WHMCS = require('../whmcs')

/**
 * Allows you to manage your domains module in WHMCS.
 * @extends WHMCS
 */
class Domains extends WHMCS {
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
   * Get domain lock status - http://docs.whmcs.com/API:Domain_Locking_Status
   * @param {String|Number} domainid
   */
  getDomainLockStatus (domainid) {
    const options = {
      action: 'domaingetlockingstatus',
      domainid: domainid
    }

    return this.callApi(options)
  }
  /**
   * Set domain lock status - http://docs.whmcs.com/API:Domain_Update_Lock
   * @param {String|Number} domainid
   * @param {String|Number} [status] 1 to lock, 0 to unlock, defaults to 0
   */
  setDomainLockStatus (domainid, status) {
    const options = {
      action: 'domainupdatelockingstatus',
      domainid: domainid,
      lockstatus: status
    }

    return this.callApi(options)
  }
  /**
   * Get domain nameservers - http://docs.whmcs.com/API:Domain_Nameservers
   * @param {String|Number} domainid
   */
  getDomainNameservers (domainid) {
    const options = {
      action: 'domaingetnameservers',
      domainid: domainid
    }

    return this.callApi(options)
  }
  /**
   * Set domain nameservers - http://docs.whmcs.com/API:Domain_Update_Nameservers
   * @param {String|Number} domainid
   * @param {Object|Array} nameservers Pass in an object with ns* properties, or an array of nameservers
   * @param {String} nameservers.ns1
   * @param {String} nameservers.ns2
   * @param {String} [nameservers.ns3]
   * @param {String} [nameservers.ns4]
   * @param {String} [nameservers.ns5]
   */
  setDomainNameservers (domainid, nameservers) {
    const options = {
      action: 'domainupdatenameservers',
      domainid: domainid
    }

    if (Array.isArray(nameservers)) {
      var len = nameservers.length
      for (var i = 0; i < len; i++) {
        options['ns' + (i + 1)] = nameservers[i]
      }
    } else if (typeof nameservers === 'object') {
      Object.assign(options, nameservers)
    }

    return this.callApi(options)
  }
}

module.exports = Domains

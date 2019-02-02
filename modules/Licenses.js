const WHMCS = require('../whmcs')

/**
 * Allows you to manage your licenses module in WHMCS.
 * @extends WHMCS
 */
class Licenses extends WHMCS {
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
   * Add License -
   * The Add License function can be used to generate a new WHMCS License Key.
   * @param product - product type (starter , plus , professional or business)
  */
  addLicense (product) {
    const options = {
      action: 'addlicense',
      product: product || 'starter'
    }

    return this.callApi(options)
  }

  /**
  * Upgrade License -
  * Upgrade or downgrade a given license to a new product.
  * @param key - The license key to be upgraded/downgraded
  * @param product - product type (starter , plus , professional or business)
  */
  upgradeLicense (key, product) {
    const options = {
      key: key,
      action: 'upgrade',
      product: product
    }

    return this.callApi(options)
  }

  /**
  * Downgrade License -
  * Alias of Upgrade License.
  * @param key - The license key to be upgraded/downgraded
  * @param product - product type (starter , plus , professional or business)
 */
  downgradeLicense (key, product) {
    this.upgradeLicense(key, product)
  }

  /**
  * Upgrade License and Reissue -
  * Upgrade or downgrade a given license to a new product and reissue it ready for installation to a new location.
  * @param key - The license key to be upgraded/downgraded
  * @param product - product type (starter , plus , professional or business)
  */
  upgradeReissueLicense (key, product) {
    const options = {
      key: key,
      action: 'upgradeandreissue',
      product
    }

    return this.callApi(options)
  }

  /**
  * Downgrade License and Reissue -
  * Alias of Upgrade License.
  * @param key - The license key to be upgraded/downgraded
  * @param product - product type (starter , plus , professional or business)
 */
  downgradeReissueLicense (key, product) {
    this.upgradeReissueLicense(key, product)
  }

  /**
  * Cancel License -
  * This will cancel an active WHMCS License Key and prevent it from being billed
 again. It will terminate it immediately and not allow it to be reactivated.
  * @param key - License Key to be cancelled
 */
  cancelLicense (key) {
    const options = {
      action: 'cancel',
      key
    }

    return this.callApi(options)
  }

  /**
  * List License -
  * The List Licenses function can be used to retrieve a list of all keys eligible for
 resale within your account.
 The no branding status will be true/false. And the license status either Active,
 Reissued, or Suspended. Expired keys are excluded.
 */
  listLicenses () {
    const options = {
      action: 'listlicenses'
    }

    return this.callApi(options)
  }

  /**
  * Reissue License -
  * Reissuing a license allows the valid domain, ip, or directory for a license to be
 automatically reset. This change occurs automatically upon the next admin login to
 the associated installation.
  * @param key - License Key to be reissued.
 */
  reissueLicense (key) {
    const options = {
      action: 'reissue',
      key
    }

    return this.callApi(options)
  }

  /**
  * Modify License -
  * Modifying a license allows you to set the valid domain, ip, or directory for a license
 key.
  * @param key - License Key to be reissued.
  * @param {Object} [opts]
  * @param {Comma} [opts.domain] separated list of allowed domains
  * @param {Comma} [opts.ipaddr] separated list of allowed IP addreses
  * @param {Comma} [opts.directory] separated list of allowed directories
 */
  modifyLicense (key, opts) {
    const options = {
      action: 'modify',
      key
    }

    Object.assign(options, opts)

    return this.callApi(options)
  }

  /**
  * Get Pricing License -
  * The Get Pricing can be used to retrieve pricing information for your account.
 */
  getPricingLicense () {
    const options = {
      action: 'getpricing'
    }

    return this.callApi(options)
  }

  /**
  * Search License -
  * The Search License function can be used to retrieve a list of keys matching
 specified criteria.
 nobranding will return a 1 if branding has been disabled.
 At least one criteria must be submitted.
  * @param {Object} [opts]
  * @param [opts.licensekey] (Optional) Obtain results of a specific license key
  * @param [opts.domain] (Optional) Obtain results of a specific domain
  * @param [opts.ipaddr] (Optional) Obtain results of a specific IP address
 */
  searchLicense (opts) {
    const options = {
      action: 'searchlicenses'
    }

    Object.assign(options, opts)

    return this.callApi(options)
  }

  /**
  * Branding Management License -
  * This function allows you to turn the Powered by WHMCompleteSolution on or off.
  * @param {boolean} action (true = enables Branding Management; false = disable Branding Management)
  * @param {License} key Key
 */
  brandingLicense (action = false, key) {
    // action The function to perform [brandingenable/brandingdisable]
    if (action && action === true) {
      action = 'brandingenable'
    } else {
      action = 'brandingdisable'
    }

    const options = {
      action,
      key,
    }

    return this.callApi(options)
  }
}


module.exports = Licenses

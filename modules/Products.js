const WHMCS = require('../whmcs')

/**
 * Allows you to manage your products module in WHMCS.
 * @extends WHMCS
 */
class Products extends WHMCS {
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
   * Get a product by ID
   * @param id
   * @todo Deprecate this in favor of getProductsByType
     */
  getProduct (id) {
    this.getProductsByType('product', id)
  }

  /**
   * Get product group by ID
   * @param gid
   * @todo Deprecate this in favor of getProductsByType
   */
  getProducts (gid) {
    this.getProductsByType('group', gid)
  }

  /**
   * Get products by type and ID
   * @param {String} type product|group|module
   * @param {String|Number} id
   */
  getProductsByType (type, id) {
    const options = {
      action: 'getproducts'
    }

    switch (type) {
      case 'product':
        options.pid = id
        break
      case 'group':
        options.gid = id
        break
      case 'module':
        options.module = id
        break
    }

    return this.callApi(options)
  }

  /**
   * Get orders by a specific method like id, userid, or status
   * @param {String} method id|userid|status
   * @param {String} id
   * @param {String|Number} [limitstart] Default is 0
   * @param {String|Number} [limitnum] Default is 25
   */
  getOrders (method, id, limitstart, limitnum) {
    const options = {
      action: 'getorders',
      limitstart,
      limitnum
    }

    switch (method) {
      case 'id':
        options.id = id
        break
      case 'userid':
        options.userid = id
        break
      case 'status':
        options.status = id
        break
    }

    return this.callApi(options)
  }

  /**
   * Calculate the cost for an upgrade or downgrade of a product/service, and create an order for it.
   * @param {Object} attributes
   * @param {String} [product.clientid]
   * @param {String} [product.serviceid]
   * @param {String} [product.type] either "product" or "configoptions"
   * @param [product.newproductid ] String
   * @param [product.newproductbillingcycle ] String Must be unique if creating a sub-account
   * @param [product.configoptions[x]] Array
   * @param [product.paymentmethod ] String
   * @param [product.promocode ] String optional
   * @param [product.calconly ] String  optional
   * @param [product.ordernotes ] String  optional
   */
  upgradeProduct (product) {
    const options = {
      action: 'upgradeproduct'
    }

    Object.assign(options, product)

    return this.callApi(options)
  }
}


module.exports = Products
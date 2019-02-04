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
	* Adds a product to the system to be available for purchase - https://developers.whmcs.com/api-reference/addproduct/
	* @param {Object} opts
	* @param {String} opts.name The name of the product to be added
	* @param {Number} opts.gid The id of the product group to add the product
	* @param {String} [opts.type] One of ‘hostingaccount’, ‘reselleraccount’, ‘server’ or ‘other’
	* @param {Boolean} [opts.stockcontrol] Set to true to enable stock control on the product
	* @param {Number} [opts.qty] How much of this product is in stock
	* @param {String} [opts.paytype] The payment type of the product. One of ‘free’, ‘onetime’, ‘recurring’
	* @param {Boolean} [opts.hidden] Should the product be hidden from the client order form
	* @param {Boolean} [opts.showdomainoptions] Should the product show the domain registration options.
	* @param {Boolean} [opts.tax] Does tax apply to the product.
	* @param {Boolean} [opts.isFeatured] Should the product be featured in the Product Group.
	* @param {Boolean} [opts.proratabilling] Is pro-rata billing enabled for this product.
	* @param {String} [opts.description] The description of the product to show on the product listing in the cart
	* @param {Number} [opts.welcomeemail] The id of the Email Template to use as the welcome email. Product/Service Messages only
	* @param {Number} [opts.proratadate] See https://docs.whmcs.com/Products_and_Services#Pricing_Tab
	* @param {Number} [opts.proratachargenextmonth] See https://docs.whmcs.com/Products_and_Services#Pricing_Tab
	* @param {String} [opts.subdomain] A comma separated list of subdomains to offer on the domain register page. eg: .domain1.com,.domain2.com
	* @param {String} [opts.autosetup] When should the product be automatically setup. One of “ (never), ‘on’ (pending order), ‘payment’ (on payment), ‘order’ (on order)
	* @param {String} [opts.module] The server module system name to associate with the product. eg: cpanel, autorelease, plesk
	* @param {Number} [opts.servergroupid] The server group id used on product creation to associate an appropriate server
	* @param {Mixed} [opts.configoption1] The first module configuration value
	* @param {Mixed} [opts.configoption2] The second module configuration value
	* @param {Mixed} [opts.configoption3] The third module configuration value
	* @param {Mixed} [opts.configoption4] The fourth module configuration value
	* @param {Mixed} [opts.configoption5] The fifth module configuration value
	* @param {Mixed} [opts.configoption6] The sixth module configuration value
	* @param {Number} [opts.order] The order to in which to display on the order form
	* @param {Array} [opts.pricing] The pricing array to associate with the product. format $pricing[currencyid]cycle
	*/
	addProduct (opts) {
		const options = {
			action: 'AddProduct',
			...opts
		}
		return this.callApi(options)
	}
}


module.exports = Products

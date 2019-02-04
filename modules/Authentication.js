const WHMCS = require('../whmcs')

/**
 * Allows you to manage your Authentication module in WHMCS.
 * @extends WHMCS
 */
class Authentication extends WHMCS {
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
	* Create an OAuth Credential - https://developers.whmcs.com/api-reference/createoauthcredential/
	* @param {Object} opts
	* @param {String} opts.grantType One of ‘authorization_code’ or ‘single_sign_on’
	* @param {String} opts.scope A space separated list of valid scopes from tbloauthserver_scopes
	* @param {String} [opts.name] The name to give the oAuth Credential for the authorization_code $grantType
	* @param {Number} [opts.serviceId] The id of the service for the single_sign_on $grantType
	* @param {String} [opts.description] The description of the OAuth Credential
	* @param {String} [opts.logoUri] URL or Path Relative to the Base WHMCS Client Area Directory to a logo image file for this application.
	* @param {String} [opts.redirectUri] Authorised Redirect URIs
	*/
	createOAuthCredential (opts) {
		const options = {
			action: 'CreateOAuthCredential',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Removes OAuth Credential record. This action cannot be undone. - https://developers.whmcs.com/api-reference/deleteoauthcredential/
	* @param {Object} opts
	* @param {Number} opts.credentialId The credential id to be deleted
	*/
	deleteOAuthCredential (opts) {
		const options = {
			action: 'DeleteOAuthCredential',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* This command can be used to validate an email address and password against
a registered user in WHMCS. On success, the userid and password hash will
be returned which can be used to create an authenticated session by setting
the session key ‘uid’ to the userid and the session key ‘upw’ to the
passwordhash. Note: if session IP validation is enabled, this API call
must be executed via the local API to receive a valid hash. - https://developers.whmcs.com/api-reference/validatelogin/
	* @param {Object} opts
	* @param {String} opts.email Client or Sub-Account Email Address
	* @param {String} opts.password2 Password to validate
	*/
	validateLogin (opts) {
		const options = {
			action: 'ValidateLogin',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* Updates a given OAuth API Client Credential. - https://developers.whmcs.com/api-reference/updateoauthcredential/
	* @param {Object} opts
	* @param {Number} opts.credentialId The auto increment ID of the credential set to be updated
	* @param {String} [opts.clientApiIdentifier] The OAuth API Client Credential Unique Identifier (Client ID) to be updated. Only required if credentialId is not known/passed.
	* @param {String} [opts.name] The name to assign
	* @param {String} [opts.description] The description to assign
	* @param {String} [opts.grantType] The grant type for which the credential set is valid for. Possible values include: authorization_code or single_sign_on
	* @param {String} [opts.scope] A space delimited list of the scopes for which the credential set is valid. See CreateOAuthCredential for permitted values
	* @param {Number} [opts.serviceId] The service ID for which the credential relates to
	* @param {Array.<String>} [opts.logoUri] he logoUri to assign
	* @param {String} [opts.redirectUri] An array of Authorized Redirect URIs
	* @param {Boolean} [opts.resetSecret] Set to true to reset the OAuth API Client Credential Secret
	*/
	updateOAuthCredential (opts) {
		const options = {
			action: 'UpdateOAuthCredential',
			...opts
		}
		return this.callApi(options)
	}
	/**
	* List OAuth Credentials matching passed criteria - https://developers.whmcs.com/api-reference/listoauthcredentials/
	* @param {Object} opts
	* @param {String} [opts.grantType] Find credentials for a specific grant type
	* @param {String} [opts.sortField] Sort the response using the passed field
	* @param {String} [opts.sortOrder] The direction of the sort order (‘ASC’, ‘DESC’)
	* @param {Number} [opts.limit] To limit the number of returned credentials
	*/
	listOAuthCredentials (opts) {
		const options = {
			action: 'ListOAuthCredentials',
			...opts
		}
		return this.callApi(options)
	}
}

module.exports = Authentication

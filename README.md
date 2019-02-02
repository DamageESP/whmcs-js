# WHMCS Node Module

This module allows you to remotely manage your WHMCS installation(s) using Node.

## Installation

```shell
npm install whmcs-js
```

## Usage

**Reminder: You need to whitelist the IP from which you are making API calls in WHMCS. Otherwise you will get an error.**

You can do this under *Setup > General Settings > Security*. [More info](https://developers.whmcs.com/api/access-control/)

### Configuring

You can remotely identify on the API using two methods: *Note that you will always need to declare serverUrl*

#### With `username` and `password`

```javascript
const config = {
  username: 'api_username',
  password: 'password_as_md5',
  serverUrl: 'http://127.0.0.1/includes/api.php' // Remember to point to the api.php file
}
```

#### With `identifier` and `secret`

You can generate these under *Setup > Staff Management > Manage API Credentials*. [More info](https://docs.whmcs.com/API_Authentication_Credentials#Creating_Admin_API_Authentication_Credentials)

```javascript
const config = {
  identifier: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
  secret: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
  serverUrl: 'http://127.0.0.1/includes/api.php' // Remember to point to the api.php file
}
```

### Making calls

Every request returns a Promise with JSON data, so you can do:

```javascript
const { Billing } = require('whmcs-js')

const myBilling = new Billing(config)

const invoices = await myBilling.getInvoices()
```

## Available Modules

### Billing

- updateInvoice(invoiceid, options)
- acceptOrder(orderid, options)
- addOrder(clientid, order)
- addCredit(clientid, amount, description)
- payInvoice(invoiceid, amount)
- getInvoice(invoiceid)
- getInvoices([options])
- cancelOrder(orderid)
- deleteOrder(orderid)
- createInvoice(clientid, invoice)
- capturePayment(invoiceid, options)

### Customers

- getContacts(clientid, [options])
- createContact(options)
- deleteContact(contactid)
- updateContact(contactid, options)
- createCustomer(options)
- deleteCustomer(clientid)
- updateCustomer(clientid, options)
- updateCustomerDomain(domainid, options)
- updateCustomerProduct(serviceid, options)
- getCustomer(clientid, [options])
- getCustomerProducts(clientid, [options])
- getCustomerDomains(clientid, [options])
- getCustomerEmails(clientid, [options])
- getCustomerInvoices(clientid, [options])
- validateLogin(email, password)
- sendEmail(id, options)
- getCredits(userid)

### Products

- getProduct(id)
- getProducts(gid)
- getProductsByType(type, id)
- getOrders(method, id, offset, limit)
- upgradeProduct(product)

### Support

- openTicket(clientid, department, subject, message, [options])
- getTicket(ticketid)
- deleteTicket(ticketid)
- replyTicket(ticketid, message, [options])
- getTickets([options])
- updateTicket(options)

### Domains

- getDomainLockStatus(domainid)
- setDomainLockStatus(domainid, status)
- getDomainNameservers(domainid)
- setDomainNameservers(domainid, nameservers)

### Utilities

- getToDoItems(status, offset, limit)

### Licenses

- addLicense(type)
- cancelLicense(key)
- listLicenses(callback)
- reissueLicense(key)
- modifyLicense(key, opts)
- getPricingLicense(callback)
- searchLicense(opts)
- brandingLicense(action, key)

## [Documentation](https://damageesp.github.io/whmcs-js/)

## License

Víctor Campos - [@DamageESP](https://twitter.com/damageesp)

Licensed under the Apache license, version 2.0 (the "license"); You may not use this file except in compliance with the license. You may obtain a copy of the license at:

[http://www.apache.org/licenses/LICENSE-2.0.html](http://www.apache.org/licenses/LICENSE-2.0.html)

Unless required by applicable law or agreed to in writing, software distributed under the license is distributed on an "as is" basis, without warranties or conditions of any kind, either express or implied. See the license for the specific language governing permissions and limitations under the license.

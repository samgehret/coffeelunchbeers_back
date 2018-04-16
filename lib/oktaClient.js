const okta = require('@okta/okta-sdk-nodejs')

const client = new okta.Client({
  orgUrl: 'https://dev-320743.oktapreview.com',
  token: '002ml4zCt6VpTP_akzJ9jdOBWRoUw5TDG_OyjOSlMR'
})

module.exports = client

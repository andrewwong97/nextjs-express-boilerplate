const routes = module.exports = require('next-routes')()

// name, pattern, page
routes.add('user', '/user/:username', 'userview')

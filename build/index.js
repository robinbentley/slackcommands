'use strict';

var _hapi = require('hapi');

var _commands = require('./commands');

var _commands2 = _interopRequireDefault(_commands);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config({ silent: true });

var server = new _hapi.Server();

server.connection({
  port: process.env.PORT || 3030
});

// register plugins
server.register({
  register: _commands2.default
});

// openshift needs to get a 200 response from /health for monitoring
server.route({
  method: 'GET',
  path: '/health',
  handler: function handler(request, reply) {
    reply().code(200);
  }
});

server.start(function (err) {
  console.log('Server running at: ', server.info.uri);
  if (err) {
    throw err;
  }
});
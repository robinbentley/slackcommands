require('dotenv').config({silent: true});

import {Server} from 'hapi';

import commands from './commands';

const server = new Server();

server.connection({
  port: process.env.PORT || 3030
});

// register plugins
server.register({
  register: commands
});

// openshift needs to get a 200 response from /health for monitoring
server.route({
  method: 'GET',
  path: '/health',
  handler: function(request, reply) {
    reply().code(200);
  }
});

server.start((err) => {
  console.log('Server running at: ', server.info.uri);
  if (err) {throw err;}
});

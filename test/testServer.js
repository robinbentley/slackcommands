require('dotenv').config({silent: true});

import {Server} from 'hapi';

import commands from '../src/commands';

const server = new Server();

server.connection({
  'port': 4040
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('Test Server Available').code(200);
  }
});

// register plugins
server.register({
  register: commands
});

server.start((err) => {
  console.log('Test Server running on port: ' + server.info.port);
});

export default server;

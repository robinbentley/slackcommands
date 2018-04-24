require('dotenv').config({ silent: true });

import { Server } from 'hapi';

import commands from './commands';

const server = new Server();

server.connection({
  port: process.env.PORT || 3030
});

// register plugins
server.register({
  register: commands
});

server.start(err => {
  if (err) {
    throw err;
  }
  console.log('Server running on port:', server.info.port);
});

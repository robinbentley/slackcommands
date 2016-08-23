require('dotenv').config()

import { Server } from 'hapi'

const server = new Server()
const env = process.env

server.connection({
  host: env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  port: env.OPENSHIFT_NODEJS_PORT || 3030
})

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('no pls')
  }
});

server.route({
  method: 'GET',
  path: '/health',
  handler: function (request, reply) {
    reply().code(200);
  }
});

server.start((err) => {
  if (err) throw err
});

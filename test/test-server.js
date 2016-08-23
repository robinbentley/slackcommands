import {Server} from 'hapi';

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

server.start((err) => {
  console.log('Test Server running on port: ' + server.info.port);
});

export default server;

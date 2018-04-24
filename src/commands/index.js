// register idividual commands into one plugin
import { endpoints as Urban } from './urban.js';

const commands = {
  register: (server, options, next) => {
    server.route(Urban);

    next();
  }
};

commands.register.attributes = {
  name: 'commands',
  version: '1.0.0'
};

export default commands;

// register idividual commands into one plugin
import {endpoints as Urban} from './urban';
import {endpoints as Dank} from './dank';

const commands = {
  register: (server, options, next) => {

    server.route(Urban);
    server.route(Dank);

    next();
  }
};

commands.register.attributes = {
  name: 'commands',
  version: '1.0.0'
};

export default commands;

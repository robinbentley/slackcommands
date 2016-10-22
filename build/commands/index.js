'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _urban = require('./urban.js');

var commands = {
  register: function register(server, options, next) {

    server.route(_urban.endpoints);

    next();
  }
}; // register idividual commands into one plugin


commands.register.attributes = {
  name: 'commands',
  version: '1.0.0'
};

exports.default = commands;
import Lab from 'lab';
import Code from 'code';

import server from './testServer';

import textFormatterTests from './utils/textFormatter.test';
import loggerTests from './utils/logger.test';
import commandTests from './commands';

const lab = exports.lab = Lab.script();

lab.test('the test server running and accepting injection', (done) => {
  let options = {url: '/'};

  server.inject(options, (reply) => {
    Code.expect(reply.result).to.equal('Test Server Available');
    Code.expect(reply.statusCode).to.equal(200);
    done();
  });
});

textFormatterTests(lab, Code);
loggerTests(lab, Code);

commandTests(lab, Code, server);

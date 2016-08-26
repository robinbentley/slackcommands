import Lab from 'lab';
import Code from 'code';

import server from './test-server';

const lab = exports.lab = Lab.script();

lab.test('the test server running and accepting injection', (done) => {
  let options = {url: '/'};

  server.inject(options, (reply) => {
    Code.expect(reply.result).to.equal('Test Server Available');
    Code.expect(reply.statusCode).to.equal(200);
    done();
  });
});

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

lab.experiment('Testing: Urban', () => {
  lab.test('It returns a random word', (done) => {
    let options = {
      method: 'POST',
      url: '/urban',
      payload: {
        text: null
      }
    };

    server.inject(options, (reply) => {
      Code.expect(reply.statusCode).to.equal(200);
      Code.expect(reply.payload).to.include(['text']);
      done();
    });
  });

  lab.test('It searches for a defined word', (done) => {
    let options = {
      method: 'POST',
      url: '/urban',
      payload: {
        text: 'test'
      }
    };

    server.inject(options, (reply) => {
      Code.expect(reply.statusCode).to.equal(200);
      Code.expect(reply.payload).to.include(['text']);
      done();
    });
  });

  lab.test('It responds when a word is not found', (done) => {
    let options = {
      method: 'POST',
      url: '/urban',
      payload: {
        text: 'testasaasdasdasdasdadsasdasd'
      }
    };

    server.inject(options, (reply) => {
      Code.expect(reply.statusCode).to.equal(200);
      Code.expect(reply.result.text).to.equal('Nothing found! Looks like *testasaasdasdasdasdadsasdasd* isn\'t real.');
      done();
    });
  });

});

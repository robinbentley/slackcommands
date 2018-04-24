export default (lab, Code, server) => {
  lab.experiment('Testing Command: Urban', () => {
    lab.test("It doesn't respond if token is missing", done => {
      let options = {
        method: 'POST',
        url: '/urban',
        payload: {
          text: null
        }
      };

      server.inject(options, reply => {
        Code.expect(reply.statusCode).to.equal(401);
        Code.expect(reply.result).to.equal('Invalid Token');
      });
    });

    lab.test("It doesn't respond if token does not match", done => {
      let options = {
        method: 'POST',
        url: '/urban',
        payload: {
          text: null,
          token: 'WRONGTOKEN'
        }
      };

      server.inject(options, reply => {
        Code.expect(reply.statusCode).to.equal(401);
        Code.expect(reply.result).to.equal('Invalid Token');
      });
    });

    lab.test('It returns a random word', () => {
      let options = {
        method: 'POST',
        url: '/urban',
        payload: {
          text: null,
          token: 'URBAN'
        }
      };

      server.inject(options, reply => {
        Code.expect(reply.statusCode).to.equal(200);
        Code.expect(reply.result).to.include('text');
      });
    });

    lab.test('It searches for a defined word', () => {
      let options = {
        method: 'POST',
        url: '/urban',
        payload: {
          text: 'test',
          token: 'URBAN'
        }
      };

      server.inject(options, reply => {
        Code.expect(reply.statusCode).to.equal(200);
        Code.expect(reply.result).to.include('text');
      });
    });

    lab.test('It responds when a word is not found', () => {
      let options = {
        method: 'POST',
        url: '/urban',
        payload: {
          text: 'testasaasdasdasdasdadsasdasd',
          token: 'URBAN'
        }
      };

      server.inject(options, reply => {
        Code.expect(reply.statusCode).to.equal(200);
        Code.expect(reply.result.text).to.equal(
          "Nothing found! Looks like *testasaasdasdasdasdadsasdasd* isn't real."
        );
      });
    });
  });
};

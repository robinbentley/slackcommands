export default (lab, Code, server) => {
  lab.experiment('Testing Command: Dank', () => {
    lab.test('It doesn\'t respond if token is missing', (done) => {
      let options = {
        method: 'POST',
        url: '/dank',
        payload: {
          text: null,
        }
      };

      server.inject(options, (reply) => {
        Code.expect(reply.statusCode).to.equal(401);
        Code.expect(reply.result).to.equal('Invalid Token');
        done();
      });
    });

    lab.test('It doesn\'t respond if token does not match', (done) => {
      let options = {
        method: 'POST',
        url: '/dank',
        payload: {
          text: null,
          token: 'WRONGTOKEN'
        }
      };

      server.inject(options, (reply) => {
        Code.expect(reply.statusCode).to.equal(401);
        Code.expect(reply.result).to.equal('Invalid Token');
        done();
      });
    });

    lab.test('It returns a list of available memes when passed `list`', (done) => {
      let options = {
        method: 'POST',
        url: '/dank',
        payload: {
          text: 'list',
          token: 'DANK'
        }
      };

      server.inject(options, (reply) => {
        Code.expect(reply.statusCode).to.equal(200);
        Code.expect(reply.result).to.include('text');
        Code.expect(reply.result.text).to.include('Available memes: ');
        done();
      });
    });

  });
};

import Lab from 'lab';
import Code from 'code';

const lab = exports.lab = Lab.script();

lab.test('returns true when 1 + 1 equals 2', (done) => {
  Code.expect(1 + 1).to.equal(2);
  done();
});

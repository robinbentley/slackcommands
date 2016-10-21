import * as formatter from '../../src/utils/textFormatter';

export default (lab, Code) => {

  lab.experiment('Testing: Text Formatting', () => {

    lab.test('Format text to be bold', done => {
      let text = formatter.formatBold('test');

      Code.expect(text).to.equal('*test*');
      done();
    });

    lab.test('Format text to be italic', done => {
      let text = formatter.formatItalic('test');

      Code.expect(text).to.equal('_test_');
      done();
    });

    lab.test('Format text to be bold and italic', done => {
      let text = formatter.formatBoldItalic('test');

      Code.expect(text).to.equal('*_test_*');
      done();
    });

    lab.test('Format text to be strike through', done => {
      let text = formatter.formatStrike('test');

      Code.expect(text).to.equal('~test~');
      done();
    });

    lab.test('Format text to be an single line quote', done => {
      let text = formatter.formatQuoteLine('test');

      Code.expect(text).to.equal('>test\n');
      done();
    });

    lab.test('Format text to be inline code', done => {
      let text = formatter.formatCodeInline('test');

      Code.expect(text).to.equal('`test`');
      done();
    });

    lab.test('Format text to be a code block', done => {
      let text = formatter.formatCodeBlock('test');

      Code.expect(text).to.equal('```test```');
      done();
    });

  });
};

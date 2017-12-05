import * as formatter from '../../src/utils/textFormatter';

export default (lab, Code) => {

  lab.experiment('Testing: Text Formatting', () => {

    lab.test('Format text to be bold', () => {
      let text = formatter.formatBold('test');

      Code.expect(text).to.equal('*test*');
    });

    lab.test('Format text to be italic', () => {
      let text = formatter.formatItalic('test');

      Code.expect(text).to.equal('_test_');
    });

    lab.test('Format text to be bold and italic', () => {
      let text = formatter.formatBoldItalic('test');

      Code.expect(text).to.equal('*_test_*');
    });

    lab.test('Format text to be strike through', () => {
      let text = formatter.formatStrike('test');

      Code.expect(text).to.equal('~test~');
    });

    lab.test('Format text to be an single line quote', () => {
      let text = formatter.formatQuoteLine('test');

      Code.expect(text).to.equal('>test\n');
    });

    lab.test('Format text to be inline code', () => {
      let text = formatter.formatCodeInline('test');

      Code.expect(text).to.equal('`test`');
    });

    lab.test('Format text to be a code block', () => {
      let text = formatter.formatCodeBlock('test');

      Code.expect(text).to.equal('```test```');
    });

  });
};

import {logError} from '../../src/utils/logger';

export default (lab, Code) => {

  lab.experiment('Testing: Logging', () => {

    lab.test('Logger accepts an error object and returns a message', () => {
      let errorObject = {};
      let errorMsg = logError(errorObject);

      Code.expect(errorMsg).to.equal('There was an error. It has been logged');
    });

    lab.test('Logger accepts an error array and returns a message', () => {
      let errorArray = [];
      let errorMsg = logError(errorArray);

      Code.expect(errorMsg).to.equal('There was an error. It has been logged');
    });

    lab.test('Logger accepts an error string and returns a message', () => {
      let errorString = '';
      let errorMsg = logError(errorString);

      Code.expect(errorMsg).to.equal('There was an error. It has been logged');
    });

  });

};

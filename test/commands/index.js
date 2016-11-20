import urbanTests from './urban.test';
import dankTests from './dank.test';

export default (lab, Code, server) => {
  urbanTests(lab, Code, server);
  dankTests(lab, Code, server);
};

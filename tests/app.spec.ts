import 'mocha';
import {expect} from 'chai';
import * as fs from 'fs';


console.log = function() {};

const chalk = require('chalk');
describe('Describe app class functions', () => {
  const blue = chalk.blue('This text is over a blue background');

  it('Test is blue color', () => {
    // chalk.blue.mockReturnValueOnce('test-blue');
    // blue.mockReturnValueOnce('test-blue');
  });
});

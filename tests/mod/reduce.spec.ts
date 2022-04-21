import 'mocha';
import {expect} from 'chai';
import {FilterMapAddReduce} from '../../src/mod/filterMapAddReduce';
import {FilterMapSubReduce} from '../../src/mod/filterMapSubReduce';

console.log = function() {};

describe('Testing for the modification', () => {
  const array:number[] = [1, 2, 3];

  const array1 = new FilterMapAddReduce(array);
  const array2 = new FilterMapSubReduce(array);

  it('instance of FilterMapAddReduce', () => {
    expect(array1).to.not.be.null;
  });

  it('reduce()', () => {
    expect(array1.reduce()).to.be.equal(6);
  });

  it('function run()', () => {
    expect(array1.run()).to.not.be.null;
  });

  it('instance of FilterMapSubReduce', () => {
    expect(array2).to.not.be.null;
  });

  it('function run()', () => {
    expect(array1.run()).to.not.be.null;
  });
});

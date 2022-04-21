import 'mocha';
import {expect} from 'chai';
import {FilterMapAddReduce} from '../../src/mod/filterMapAddReduce';
import {FilterMapSubReduce} from '../../src/mod/filterMapSubReduce';

console.log = function() {};

describe('Testing for the modification', () => {
  const array:number[] = [1, 2, 3];

  const array1 = new FilterMapAddReduce(array);

  it('instance of FilterMapAddReduce', () => {
    expect(array1).to.not.be.null;
  });

  it('reduce()', () => {
    expect(array1.reduce()).to.be.equal(6);
  });

  it('function run()', () => {
    expect(array1.run()).to.not.be.null;
  });

//   it('notes.getNotes() returns notes', () => {
//     expect(array1.map((x) => { return x*2})).to.deep.equal([2, 4, 6]);
//   });

//   it('notes.getNotes() returns notes', () => {
//     expect(array1.filter()).to.deep.equal([]);
//   });
});

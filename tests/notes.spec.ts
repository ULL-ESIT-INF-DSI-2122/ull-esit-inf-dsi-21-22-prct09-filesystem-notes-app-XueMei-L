import 'mocha';
import {expect} from 'chai';
import * as fs from 'fs';
import {Notes, colours} from '../src/notes';


console.log = function() {};

describe('Testing for the practice 09', () => {

  const notes = Notes.getNotes();

  describe('Testing for the class Notes', () => {
    it('This is a note object', () => {
      expect(Notes).not.to.be.equal(null);
    });

    it('notes.getNotes() returns notes', () => {
      expect(Notes.getNotes()).to.be.equal(notes);
    });
  });

  //Add function test
  describe('add function test', () => {
    it('notes.addNote() returns New note added! with title: Primera nota', () => {
      expect(notes.addNote('User1', 'Primera nota', 'Prueba_01', colours.yellow)).
      to.be.equal('New User User1, Sucesfully to add the new note with title: [Primera nota].');
    });

    it('notes.addNote() returns New note added! with title: Segunda nota', () => {
      expect(notes.addNote('User1', 'Segunda nota', 'Prueba_02', colours.yellow)).
      to.be.equal('Sucesfully to add the new note with title: [Segunda nota].');
    });

    it('notes.addNote() returns Could not add the new note, there is a note has the same title.', () => {
      expect(notes.addNote('User1', 'Segunda nota', 'Prueba_02', colours.yellow)).
      to.be.equal('Could not add the new note, there is a note has the same title.');
    });

    it('notes.addNote() returns New user with the new note: Prueba_01', () => {
      expect(notes.addNote('User2', 'Primera nota', 'Prueba_01', colours.yellow)).
      to.be.equal('New User User2, Sucesfully to add the new note with title: [Primera nota].');
    });
  });

});

fs.rmdirSync('./database', {recursive: true});
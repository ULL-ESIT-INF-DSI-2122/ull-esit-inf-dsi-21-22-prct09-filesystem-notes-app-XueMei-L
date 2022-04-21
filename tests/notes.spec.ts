// import 'mocha';
// import {expect} from 'chai';
// import * as fs from 'fs';
// import {Notes, colours} from '../src/notes';


// console.log = function() {};

// describe('Testing for the practice 09', () => {
//   const notes = Notes.getNotes();

//   describe('Testing for the class Notes', () => {
//     it('This is a note object', () => {
//       expect(Notes).not.to.be.equal(null);
//     });

//     it('notes.getNotes() returns notes', () => {
//       expect(Notes.getNotes()).to.be.equal(notes);
//     });
//   });

//   // Add function test
//   describe('add function test', () => {
//     it('notes.addNote() returns New note added! with title: Note01', () => {
//       expect(notes.addNote('User1', 'Note01', 'Test01', colours.yellow)).
//           to.be.equal('New User [User1], Sucesfully to add the new note with title: [Note01].');
//     });

//     it('notes.addNote() returns New note added! with title: Note02', () => {
//       expect(notes.addNote('User1', 'Note02', 'Test02', colours.yellow)).
//           to.be.equal('Sucesfully to add the new note with title: [Note02].');
//     });

//     it('notes.addNote() returns New note added! with title: Note03', () => {
//       expect(notes.addNote('User1', 'Note03', 'Test03', colours.yellow)).
//           to.be.equal('Sucesfully to add the new note with title: [Note03].');
//     });

//     it('notes.addNote() returns Could not add the new note, there is a note has the same title.', () => {
//       expect(notes.addNote('User1', 'Note03', 'Test03', colours.yellow)).
//           to.be.equal('Could not add the new note, there is a note has the same title.');
//     });

//     it('notes.addNote() returns New user with the new note: Note01', () => {
//       expect(notes.addNote('User2', 'Note01', 'Test03', colours.yellow)).
//           to.be.equal('New User [User2], Sucesfully to add the new note with title: [Note01].');
//     });
//   });

//   // Remove function test
//   describe('remove function test', () => {
//     it('notes.removeNote() returns Note removed!', () => {
//       expect(notes.removeNote('User1', 'Note03')).
//           to.be.equal('Sucesfully to remove the [Note03] notes.');
//     });

//     it('notes.removeNote() returns Error: Title does not exist!', () => {
//       expect(notes.removeNote('User1', 'Note_03')).
//           to.be.equal('Error, there is no one note called [Note_03].');
//     });

//     it('notes.removeNote() returns Error: User not found!', () => {
//       expect(notes.removeNote('u2', 'Note01')).
//           to.be.equal(`Error, User [u2] not found!`);
//     });
//   });

//   // Read a note
//   describe('readNote function test', () => {
//     it('notes.readNote() returns ', () => {
//       expect(notes.readNote('User1', 'Note01')).to.be.equal(
//           `- Title: Note01: Body: Test01`,
//       );
//     });

//     it('notes.readNote() returns There is no note with the title [n1]', () => {
//       expect(notes.readNote('User1', 'n1')).to.be.equal(
//           `There is no note with the title [n1]`,
//       );
//     });

//     it('notes.readNote() returns Error, User [u1] not found!', () => {
//       expect(notes.readNote('u1', 'Note01')).to.be.equal('Error, User [u1] not found!');
//     });
//   });

//   // List function test
//   describe('list function test', () => {
//     it('notes.listNotes() of User1 returns all notes of User1', () => {
//       expect(notes.listNotes('User1')).to.be.equal(
//           `- Note01: Test01\n- Note02: Test02\n`,
//       );
//     });

//     it('notes.listNotes() returns Error, User {u1} not found!', () => {
//       expect(notes.listNotes('u1')).to.be.equal('Error, User [u1] not found!');
//     });
//   });

//   // Modify a note
//   describe('modifyNote function test', () => {
//     it('notes.modifyNote() change title ', () => {
//       expect(notes.modifyNote('User1', 'Note01', 'title', 'Note_01')).to.be.equal(
//           `Changed title [Note01] to [Note_01]`,
//       );
//     });

//     it('notes.modifyNote() change body ', () => {
//       expect(notes.modifyNote('User1', 'Note_01', 'body', 'This is note01')).to.be.equal(
//           `Changed body [Test01] to [This is note01]`,
//       );
//     });

//     it('notes.modifyNote() change color ', () => {
//       expect(notes.modifyNote('User1', 'Note_01', 'color', 'green')).to.be.equal(
//           `Changed color [yellow] to [green]`,
//       );
//     });

//     it('notes.modifyNote() can not change color, title error', () => {
//       expect(notes.modifyNote('User1', 'Note', 'color', 'green')).to.be.equal(
//           `Error, there is no one note called [Note].`,
//       );
//     });

//     it('notes.modifyNote() can not change color, user not found', () => {
//       expect(notes.modifyNote('u1', 'Note', 'color', 'green')).to.be.equal(
//           `Error, User [u1] not found!`,
//       );
//     });

//     describe('fs testing', () => {
//       it('database - User1', () => {
//         expect(fs.existsSync(`./database/User1`)).to.equal(true);
//       });

//       it('database - file ', () => {
//         expect(fs.existsSync(`./database/User1/Note02.json`)).to.equal(true);
//       });
//     });
//   });
// });

// fs.rmdirSync('./database', {recursive: true});

// /* eslint-disable new-cap */
// import 'mocha';
// import {expect} from 'chai';
// import {execSync} from 'child_process';
// import {Notes, colours} from '../src/notes';
// import * as fs from 'fs';

// console.log = function() {};

// describe('Testing for the practice 09', async () => {
//   const notes = Notes.getNotes();
//   notes.addNote('User1', 'Note01', 'Test01', colours.yellow);

//   const testList = (yargs:any) => {
//     return execSync(`node dist/app.js list ${yargs}`).toString();
//   };

//   const testAdd = (...yargs:any) => {
//     return execSync(`node dist/app.js add ${yargs[0]} ${yargs[1]} ${yargs[2]} ${yargs[3]}`).toString();
//   };

//   const testModify = (...yargs:any) => {
//     return execSync(`node dist/app.js modify ${yargs[0]} ${yargs[1]} ${yargs[2]} ${yargs[3]}`).toString();
//   };

//   const testRemove = (...yargs:any) => {
//     return execSync(`node dist/app.js remove ${yargs[0]} ${yargs[1]}`).toString();
//   };

//   const testRead = (...yargs:any) => {
//     return execSync(`node dist/app.js read ${yargs[0]} ${yargs[1]}`).toString();
//   };

//   it('Yargs for add a note', async () => {
//     const response = await testAdd("--user='User3'", "--title='Note1'", "--body='new note'", "--color='green'");
//     expect(response).to.equal("Adding new note...\nNew User User3, Sucesfully to add the new note with title: [Note1].\n");
//   });

//   it('Yargs for list all notes', async () => {
//     const response = await testList("--user='User3'");
//     expect(response).to.equal("Showing Note\nNote1: new note\n");
//   });

//   it('Yargs for read a note', async () => {
//     const response = await testRead("--user='User3'", "--title='Note1'");
//     expect(response).to.equal("- Title: Note1: Body: new note\n");
//   });

//   it('Yargs for read a note', async () => {
//     const response = await testModify("--user='User3'", "--title='Note1'", "--type='body'", "--content='Hello World'");
//     expect(response).to.equal("Changed body [new note] to [Hello World]\n");
//   });


//   it('Yargs for read a note', async () => {
//     const response = await testRemove("--user='User3'", "--title='Note1'");
//     expect(response).to.equal("Sucesfully to remove the [Note1] notes.\n");
//   });
// });

// fs.rmdirSync('./database', {recursive: true});

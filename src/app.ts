/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */

import {Notes, colours} from './notes';
import yargs from "yargs";

const chalk = require('chalk');

/**
 * A object of class Notes
 */
const note = Notes.getNotes();

/**
 * yargs command to add a new note
 */
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        user: {
            describe: 'User user',
            demandOption: true,
            type: 'string',
        },
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        },
        color: {
            describe: 'Note color. The colors must be red, green, blue and yellow, yellow is the default color.',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        // Default colour
        let colourNote: colours = colours.yellow;
        if (typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.body === 'string' && typeof argv.color === 'string') {
            Object.values(colours).forEach((value) => {
                if (argv.color == value) {
                  colourNote = value;
                }
              });
            note.addNote(argv.user, argv.title, argv.body, argv.color);
        }
    },
});

/**
 * yargs command to delete a note
 */
yargs.command({
    command: 'remove',
    describe: 'Detele a note',
    builder: {
        user: {
            describe: 'User user',
            demandOption: true,
            type: 'string',
        },
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if (typeof argv.user === 'string' && typeof argv.title === 'string') {
            note.removeNote(argv.user, argv.title);
        }
    },
});

/**
 * yargs command to modify a note
 */
yargs.command({
    command: 'modify',
    describe: 'modify a note',
    builder: {
        user: {
            describe: 'User user',
            demandOption: true,
            type: 'string',
        },
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if (typeof argv.user === 'string' && typeof argv.title === 'string') {
            note.modifyNote(argv.user, argv.title);
        }
    },
});

/**
 * yargs to show a specify note
 */
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        user: {
            describe: 'User user',
            demandOption: true,
            type: 'string',
        },
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if (typeof argv.user === 'string' && typeof argv.title === 'string') {
            note.showANote(argv.user, argv.title);
            // fs.writeFileSync(`./database/${name}/${titleTogether}.json`, structure);
        }
    },
});

/**
 * Yargs to show all notes
 */
yargs.command({
    command: 'show',
    describe: 'Show all note',
    builder: {
        user: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if (typeof argv.user === 'string') {
            console.log(chalk.blue('Show Note'));
            // console.log(chalk.green(note));
            note.showAllNotes(argv.user);
        }
    },
});

yargs.parse();
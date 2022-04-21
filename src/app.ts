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
            console.log(chalk.blue(`Adding new note...`));
            note.addNote(argv.user, argv.title, argv.body, argv.color);
        } else {
            console.log(chalk.red(`There is a proble of the commad`));
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
        } else {
            console.log(chalk.red(`There is a proble of the commad`));
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
        type: {
            describe: 'Data to modify',
            demandOption: true,
            type: 'string',
        },
        content: {
            describe: 'Content to modify',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if (typeof argv.user === 'string' && typeof argv.title === 'string' &&
        typeof argv.type === 'string' && typeof argv.content === 'string') {
            note.modifyNote(argv.user, argv.title, argv.type, argv.content);
        } else {
            console.log(chalk.red(`There is a proble of the commad`));
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
            note.readNote(argv.user, argv.title);
        } else {
            console.log(chalk.red(`There is a proble of the commad`));
        }
    },
});

/**
 * Yargs to show all notes
 */
yargs.command({
    command: 'list',
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
            console.log(chalk.blue('Showing Note'));
            // console.log(chalk.green(note));
            note.listNotes(argv.user);
        } else {
            console.log(chalk.red(`There is a proble of the commad`));
        }
    },
});

yargs.parse();
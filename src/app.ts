/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */

import {colors, Notes} from './notes';
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
            describe: 'Note Color. The colors must be red, green, blue and yellow, yellow is the default color.',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if (typeof argv.user === 'string' && typeof(argv.title) === 'string' && typeof(argv.body) === 'string' && typeof(argv.color) === 'string') {
            Object.values(colors).forEach((color) => {
                if (color == argv.color) {

                } else {

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
    command: 'delete',
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
        if (typeof(argv.user) === 'string' &&typeof argv.title === 'string') {
            note.deleteNote(argv.user, argv.title);
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
    command: 'showone',
    describe: 'show a note',
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
    command: 'sa',
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
            // note.showAllNotes(argv.user);
            console.log(chalk.blue('Show Note'));
            console.log(chalk.green(note));
        }
    },
});

yargs.parse();
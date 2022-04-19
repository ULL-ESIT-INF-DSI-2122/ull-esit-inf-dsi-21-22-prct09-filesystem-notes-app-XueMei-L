/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */

import {colors, Notes} from './notes';
import yargs from "yargs";

// const chalk = require('chalk');

// console.log(chalk.blue('Hello world'));
// console.log(chalk.blue.inverse('This text is over a blue background'));


/**
 * Titulo
 * Cuerpo
 * Color
 */

/**
 * Cada persona tiene su lista de notas
 *  - add
 *  - detele
 *  - modify
 *  - Show all notes     (green)
 *  - Show notes specify (green)
 *  - 
 */

const note = new Notes();

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
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
        if (typeof argv.title === 'string' && typeof(argv.body) === 'string' && typeof(argv.color) === 'string') {
            Object.values(colors).forEach((color) => {
                if (color == argv.color) {

                } else {

                }
            });
            note.addNote(argv.title, argv.body, argv.color);
        }
    },
});




yargs.parse();
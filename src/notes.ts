/* eslint-disable object-curly-spacing */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable indent */
import * as fs from 'fs';
import * as chalk from 'chalk';
// import * as yargs from 'yargs';




export enum colors {
    red = 'red',
    green = 'green',
    blue = 'blue',
    yellow = 'yellow'
}

export class Notes {
    
    private static notes:Notes;
    
    constructor() {

    }

    public static getNotes(): Notes {
        if (!fs.existsSync(`./database`)) fs.mkdirSync(`./database`, {recursive: true});
        if (!Notes.notes) Notes.notes = new Notes();
        return Notes.notes;
    }

    showAllNotes(userName:string) {

    }
 
    showANote(username:string, noteTitle:string) {

    }

    addNote(username:string, title:string, body:string, color:string) {
        const newNote = { title: {title}, body: {body}, color: {color}};
        if (fs.existsSync(`./database/${username}`)) {
            
        }
    }

    deleteNote(userName:string, title:string) {
        
    }

    modifyNote(username:string, title:string) {

    }
}
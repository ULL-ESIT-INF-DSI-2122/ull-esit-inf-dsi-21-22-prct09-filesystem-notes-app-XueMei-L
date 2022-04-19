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
    
    constructor() {}

    public static getNotes(): Notes {
        if (!fs.existsSync(`./database`)) fs.mkdirSync(`./database`, {recursive: true});
        if (!Notes.notes) Notes.notes = new Notes();
        return Notes.notes;
    }

    showAllNotes(userName:string) {
        console.log(`show all notes`);
        if (fs.existsSync(`./database/${userName}/hello.json`)) {
            console.log(`there is a database`);
            fs.writeFileSync(`./database/${userName}/hello.json`, 'hello');
        }else {
            console.log(`i am here`);
            fs.mkdirSync(`./database/${userName}`, {recursive: true});
            fs.writeFileSync(`./database/${userName}/hello.json`, 'hola');
        }
    }
 
    showANote(username:string, noteTitle:string) {

    }

    addNote(username:string, title:string, body:string, color:string) {
        // const structure = `{ "title": "${title}", "body": "${body}" , "color": "${colour}" }`;
        console.log(`{ "title": "${title}", "body": "${body}", "color": "${color}}"`);
        const newNote = `{"title": "${title}", "body": "${body}", "color": "${color}"}`;
        if (fs.existsSync(`./database/${username}/${username}.json`)) {
            console.log(`add++`);
            fs.writeFileSync(`./database/${username}/${username}.json`, newNote);
        }
    }

    deleteNote(userName:string, title:string) {
        
    }

    modifyNote(username:string, title:string) {

    }
}
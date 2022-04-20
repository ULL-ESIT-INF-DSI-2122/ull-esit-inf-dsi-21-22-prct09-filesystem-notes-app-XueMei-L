/* eslint-disable object-curly-spacing */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable indent */
import * as fs from 'fs';

const chalk = require('chalk');


export enum colours {
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

    listNotes(username:string):string {
        if(fs.existsSync(`./database/${username}`) == true) {
            const fileDatabase = fs.readdirSync(`./database/${username}/`);
            let aux:string = '';
            fileDatabase.forEach((Note) => {
                const noteData = fs.readFileSync(`./database/${username}/${Note}`);
                const noteDataToJsonObj = JSON.parse(noteData.toString());
                console.log(chalk.keyword(noteDataToJsonObj.color)
                (noteDataToJsonObj.title + `: ` + noteDataToJsonObj.body));
                aux += `- ${noteDataToJsonObj.title}: ${noteDataToJsonObj.body}` + '\n';
            });
            return aux;
        } else {
            console.log(`Error, User {${username}} not found!`);
            return `Error, User [${username}] not found!`
        }
    }
 
    readNote(username:string, noteTitle:string):string {
        if(fs.existsSync(`./database/${username}`) == true) {
            if(fs.existsSync(`./database/${username}/${noteTitle}.json`) == true) {
                const noteData = fs.readFileSync(`./database/${username}/${noteTitle}.json`);
                const dataNote = JSON.parse(noteData.toString());
                console.log(chalk.keyword(dataNote.color)(`- Title: ${dataNote.title}: ` + `Body: ${dataNote.body}`));
                return `- Title: ${dataNote.title}: ` + `Body: ${dataNote.body}`;
            } else {
                console.log(chalk.red(`There is no note with the title ${noteTitle}`));
                return `There is no note with the title [${noteTitle}]`;
            }
        } else {
            console.log(chalk.red(`User [${username}] not found!`));
            return `Error, User [${username}] not found!`
        }
    }

    addNote(username:string, title:string, body:string, color:string):string {
        const structure = `{ "title": "${title}", "body": "${body}" , "color": "${color}" }`;
        if (fs.existsSync(`./database/${username}`) == true) {
            if(fs.existsSync(`./database/${username}/${title}.json`) == false) {
                fs.writeFileSync(`./database/${username}/${title}.json`, structure);
                console.log(chalk.green(`Sucesfully to add the new note with title: [${title}].`));
                return `Sucesfully to add the new note with title: [${title}].`;
            } else {
                console.log(chalk.red('Could not add the new note, there is a note has the same title.'));
                return 'Could not add the new note, there is a note has the same title.';
            }
        } else {
            fs.mkdirSync(`./database/${username}`);
            fs.writeFileSync(`./database/${username}/${title}.json`, structure);
            console.log(chalk.green(`New User ${username}, Sucesfully to add the new note with title: [${title}].`));
            return `New User [${username}], Sucesfully to add the new note with title: [${title}].`;
        }
    }

    removeNote(username:string, title:string): string {
        if(fs.existsSync(`./database/${username}`) == true) {
            if (fs.existsSync(`./database/${username}/${title}.json`) == true) {
                fs.unlinkSync(`./database/${username}/${title}.json`);
                console.log(chalk.green(`Sucesfully to remove the [${title}] notes.`));
                return `Sucesfully to remove the [${title}] notes.`;
            } else {
                console.log(chalk.red(`Error, there is no one note called [${title}].`));
                return `Error, there is no one note called [${title}].`;
            }
        } else {
            console.log(chalk.red(`Error, User {${username}} not found!`));
            return `Error, User [${username}] not found!`;
        }
    }

    modifyNote(username:string, title:string, type:string, content:string):string {
        if(fs.existsSync(`./database/${username}`) == true) {
            if(fs.existsSync(`./database/${username}/${title}.json`) == true) {
                const noteData = fs.readFileSync(`./database/${username}/${title}.json`);
                const dataNote = JSON.parse(noteData.toString());
                let aux:string = '';
                switch(type) {
                    case 'title':
                        const structureTitle = `{ "title": "${content}", "body": "${dataNote.body}" , "color": "${dataNote.color}" }`;
                        aux = `Changed title [${dataNote.title}] to [${content}]`;
                        console.log(chalk.green(`Changed title [${dataNote.title}] to [${content}]`));
                        fs.writeFileSync(`./database/${username}/${title}.json`, structureTitle);
                    break;
                    case 'body':
                        const structureBody = `{ "title": "${dataNote.title}", "body": "${content}" , "color": "${dataNote.color}" }`;
                        aux = `Changed body [${dataNote.body}] to [${content}]`;
                        console.log(chalk.green(`Changed body [${dataNote.body}] to [${content}]`));
                        fs.writeFileSync(`./database/${username}/${title}.json`, structureBody);
                    break;
                    case 'color':
                        const structureColor = `{ "title": "${dataNote.title}", "body": "${dataNote.body}" , "color": "${content}" }`;
                        aux = `Changed color [${dataNote.color}] to [${content}]`;
                        console.log(chalk.green(`Changed color [${dataNote.color}] to [${content}]`));
                        fs.writeFileSync(`./database/${username}/${title}.json`, structureColor);
                    break;
                }
                return aux;
            } else {
                console.log(chalk.red(`Error, there is no one note called [${title}].`));
                return `Error, there is no one note called [${title}].`;
            }
        } else {
            console.log(chalk.red(`Error, User {${username}} not found!`));
            return `Error, User [${username}] not found!`;
        }
    }
}
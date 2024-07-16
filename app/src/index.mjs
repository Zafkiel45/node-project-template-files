#!/usr/bin/env node
import { promises as fs } from 'fs';
import { Command } from 'commander';
import path from 'path';

const program = new Command();

program
    .requiredOption('-t, --type <type>', "escolha a forma de criação")
    .requiredOption('-u, --unity  <type>', "escolha a unidade")
    .requiredOption('-d, --directory <type...>', 'escolha o diretório')
    .requiredOption('-n, --name <type...>', 'escolha o nome da pasta(s)');

program.parse();

const PROGRAM_ALL_OPTIONS = program.opts();

async function HandleCreateFolderRecursive() {
    const folder_path = path.join(
        PROGRAM_ALL_OPTIONS.unity, 
        ...PROGRAM_ALL_OPTIONS.directory,
        ...PROGRAM_ALL_OPTIONS.name
    );

    try {
        await fs.mkdir(folder_path, {recursive: true});
        console.log(`pasta: ${PROGRAM_ALL_OPTIONS.name} criada com sucesso!`);
    } catch (err) {
        console.error(`ocorreu um erro: ${err}`);
    };
};
async function HandleCreateFolderMultiple() {

    PROGRAM_ALL_OPTIONS.name.forEach(async (itemName, index) => {
        const folder_path = path.join(
            PROGRAM_ALL_OPTIONS.unity, 
            ...PROGRAM_ALL_OPTIONS.directory,
            itemName,
        );

        try {
            await fs.mkdir(folder_path, {recursive: true});
            console.log(`pasta ${PROGRAM_ALL_OPTIONS.name[index]} criada com sucesso!`);
        } catch (err) {
            console.log(`ocorreu um erro: ${err}`);
        }
    })

}
function HandleErrors() {
    const flag_errors = 
        PROGRAM_ALL_OPTIONS.way && 
        PROGRAM_ALL_OPTIONS.unity && 
        PROGRAM_ALL_OPTIONS.type && 
        PROGRAM_ALL_OPTIONS.name;

    try {
        if(flag_errors) {
            throw new Error(`Está faltando alguma flag`);
        };
    } catch (err) {
        console.error(`ocorreu o seguinte erro: ${err}`)
    }
};
async function HandleInputUser() {
    HandleErrors();

    const possibleTypes = {
        recursive: PROGRAM_ALL_OPTIONS.type === 'recursive',
        multiple: PROGRAM_ALL_OPTIONS.type === 'multiple',
    }

    if(possibleTypes.recursive) {
        await HandleCreateFolderRecursive();
    } else if(possibleTypes.multiple) {
        await HandleCreateFolderMultiple();
    } else {
        console.error(`ops...tente escolher como type(-t): "recursive" ou "multiple"`);
    }
};

HandleInputUser();
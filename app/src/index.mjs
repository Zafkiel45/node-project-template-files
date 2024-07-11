#!/usr/bin/env node
import { promises as fs } from 'fs';
import { Command } from 'commander';
import path from 'path';

// no momento não possui suporte a sistemas Unix, apenas Windows.

const program = new Command();

program
    .requiredOption('-w, --way <type>', "escolha a forma de criação")
    .option('-u, --unity <type>', 'escolha a unidade')
    .option('-d, --directory <type...>', 'escolha o diretório')
    .option('-t, --template <type...>', 'escolha o nome do template')
    .option('-n, --name <type>', 'escolha o nome do arquivo');

program.parse();

const AllOptions = program.opts();
const Check = 
    !AllOptions.template || 
    !AllOptions.directory || 
    !AllOptions.unity || 
    AllOptions.unity.length > 2;

if(Check) {
    console.log("Ocorreu um erro ao declarar os argumentos.");
    process.exit(1);
};

if(AllOptions.way === 'recursive') {
    const templePath = path.join(AllOptions.unity, ...AllOptions.directory, ...AllOptions.template);
    const filePath   = path.join(templePath,`${AllOptions.name}.txt`);

    async function createTemplate() {
        try {
            await fs.mkdir(templePath, { recursive: true });
            await fs.writeFile(filePath, 'hello');
            console.log('Pastas criadas com sucesso de maneira recursiva');
        } catch (err) {
            console.error(`Ocorreu um erro: ${err.message}`);
            process.exit(1);
        }
    };
    
    createTemplate();
} else if(AllOptions.way == 'multi-folder') {

    AllOptions.template.forEach(async (item) => {
        const TemplatePath = path.join(AllOptions.unity, ...AllOptions.directory, item);

        try {
            await fs.mkdir(TemplatePath);
            console.log('Pasta criada com sucesso: ' + item);
        } catch (err) {
            console.error('ocorreu um erro', err);
            process.exit(0);
        };

    });
} else {
    console.error("Ops...Parece que você passou como argumento para -w um valor não, aceito. Por favor, utilize 'recursive' ou 'multi-folder'");
}
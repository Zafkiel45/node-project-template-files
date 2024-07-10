# node-project-template-files

# Instalando:

Um projeto simples para a criação de pastas recursivas ou multiplas pastas de uma só vez num mesmo diretório. 

Para utilizar é muito simples: Primeiro, crie um `fork` do projeto e baixe uma cópia do projeto em seus dispositivo `windows`. Depois, utilize em seu terminal o segunte comando: `cd app` para ir até a respectiva pasta do código fonte. 

Após isso, em seu terminal novamente, utilize `npm install -g` para instalar todas as dependências globalmente. O projeto conta apenas com o `commander.js` como dependência. 

# Usando: 

Para utilizar, é importante notar que é necessário está utilizando o sistema operacional `windows`, pois este projeto não conta com suporte a sistemas baseados em `unix` (ainda). 

Dito isso, utilize o comando `template` para executar scrips do projeto. Como por exemplo `template -w recursive`. Existe algumas `flags` para personalizar a criação da aplicação, irei listar abaixo todas as possibilidades.

## Criando pastas recursivamente: 

Criar pastas recursivamente significa que mesmo que você passe um diretório em que o `pai` não exista, ele será criado até atingir o objeto. A flag `-w`, ou `--way` é obrigatória e possui dois valores possivéis: `recursive` ou `multi-folder`.  Qualquer valor diferente desses dois resultará num `console.log("nothing :(") e a aplicação é encerrada. 

A flag passada para o `-w` deve ser `recursive`, caso sua intenção seja criar pastas recursivamente. 

```bash
template -w recursive -u D: -d DiretorioDePreferencia -t Nome_da_pasta -n cria_um_arquivo_txt_opcionalmente
```
Acima cria recursivamente no endereço: `D:\DiretorioDePreferencia\Nome_da_pasta\cria_um_arquivo_txt_opcionalmente.txt` pastas com um arquivo `txt` dentro com o valor inicial `hello`. A flag `-n` ou `--name` não é obrigatória, diferente das outras. 

## Criando Multiplas pastas: 

Para criar várias pastas dentro de um diretório, passamos para `-w` o valor: `multi-folder`. Assim, você pode criar várias pastas em um único diretório de maneira eficiente. Diferente do modo `recursivo`, caso a pasta `pai` não exista, ocorrerá um erro, portanto certifique-se de criar o diretório antes de criar as pastas dentro dele. 

```bash
template -way multi-folder -u D: -d DiretorioDePreferencia -t PASTA1 PASTA2 PASTA3 PASTA4 
```
Esse comando irá criar dentro de `DiretorioDePreferencia` várias pastas com o nome: `PASTA1 PASTA2 PASTA3 PASTA4 ` respectivamente. 

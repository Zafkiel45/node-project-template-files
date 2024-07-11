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

# Todas as Flags:

- `-w` ou `--way` para declarar a forma que deseja criar pastas. Apenas dois valores são possíveis: `recursive` e `multi-folder`. Mais detalhes explicado acima.
- `-u` ou `--unity` para declarar a unidade em específico que você desejar criar pastas. Para pessoas que não tem mais de um HD ou SSD, o valor será: `C:`, mas para quem tem
multiplas unidades, verifique a sigla da sua respectica unidade em seu computador.
- `-d` ou `--directory` para declarar a pasta que você quer criar outras pastas dentros. Se ela não existir e você passar `recursive` para `-w`, esta pasta será criada para a unidade específicada em `-u`. Vale lembrar que é possível passar mais de um valor para `--directory`, assim criando a possibilidade de pastas aninhadas. No modo `multi-folder` você precisa ter um diretório já criado, pois nenhuma pasta pai vai ser criada caso ela não exista.
- `-t` ou `--template` para declarar o nome ou nomes das pastas que você deseja criar. No modo `recursivo` as pastas são criadas aninhadamente, enquanto no modo `multi-folder` os valores que você passar, será uma pasta dentro do diretório, como por exemplo: `template -w multi-folder -u D: -d template -t PASTA1 PASTA2 PASTA3 PASTA4` e assim por dianta. Neste caso irá criar 4 pastas com seus respectivos nomes `PASTA1 PASTA2 PASTA3 PASTA4` dentro do `diretório` passado na flag `-d`.
- `-n` ou `--name` para declarar o nome de um arquivo `txt` que é criado dentro da especificada com a flag `-t`. Apenas para o modo `recursive`.

# node-project-template-files

# Instalando:

Um projeto simples para a criação de pastas recursivas ou multiplas pastas de uma só vez num mesmo diretório. 

Para utilizar é muito simples: Primeiro, crie um `fork` do projeto e baixe uma cópia do projeto em seus dispositivo. Depois, utilize em seu terminal o segunte comando: `cd app` para ir até a respectiva pasta do código fonte. 

Após isso, em seu terminal novamente, utilize `npm install -g` para instalar todas as dependências globalmente. O projeto conta apenas com o `commander.js` como dependência. 

# Usando: 

Dito isso, utilize o `shibang`:`template` para executar scrips do projeto. Como por exemplo `template -w recursive`. Existe algumas `flags` para personalizar a criação da aplicação, irei listar abaixo todas as possibilidades ou alterar a forma que se comporta. 

## Flags Obrigatórias: 

Todas as `flags` são obrigatórias e se por ventura você esquecer alguma, um erro será retornando e uma mensagem de erro será printado no console. Qualquer dúvida abra uma `issue` ou realize um `pull request` para melhorias. 

As seguintes `flags` estão disponíveis na aplicação: 

- `-t` ou `--type` para determinar a forma que você deseja criar pastas. Existem dois valores possíveis: `recursive` e `multiple`. Onde `recursive` cria uma única pasta recursivamente, ou seja, se caso o diretório `pai` não exista, será criado para conter o diretório específicado com a flag `-n` (diretório filho). Caso passe o valor `multiple`, o resultado é semelhante. Pastas `pai` serão criadas recursivamente, a diferença é que você pode passar mais de uma pasta para `-n`, assim criando mais de uma pasta ao mesmo tempo.

- `-u` ou `--unity` para determinar a unidade em que você deseja criar as pastas. No Windows, são siglas como `C:` ou `E:`. Em sistemas baseados em `unix` armazenamentos externos são diferentes e são acessados em outros espaços. Verifique como acessar armazenamento externo em seu sistema antes de utilizar.

- `-d` ou `--directory` para determinar a pasta pai em que as novas pastas criadas serão colocadas, ou seja, serão filhos do caminho passado em `--directory`. Para ambas formas, tanto `recursive` quanto para `multiple` passado em `-t`, será criado pastas `pai` caso não exista ainda.

- `-n` ou `--name` para determinar o nome da nova pasta. Se usando o modo `recursive`, recomendo passar apenas um único nome. Se usando o modo `multiple`, pode passar quantos nomes quiser. Cada valor será uma pasta nova.


## Criando pastas no modo `recursive`: 

Utilizar está aplicação é bem simples. Considere o seguinte código: 

```bash
template -t recursive -u C: -d PASTA_PAI_1 PASTA_PAI_2 -n NOVA_PASTA 
```

Acima, um novo diretório com a pasta `NOVA_PASTA` dentro será criado. Será algo como: 

```txt
📁C:\
  |__📁PASTA_PAI_1
    |__📁PASTA_PAI_2
      |__ 📁NOVA_PASTA
```

## Usando no modo `mutiple`: 

É parecido com o modo `recursive`, mas com uma leve diferença: Pode passar mais de um nome para as pastas, assim, criando múltiplas pastas:

```bash
template -t multiple -u C: -d Games favorite -n Nier_automata Terraria Skyrim Dragons_dogma 
```

O resultado seria esse: 

```txt
📁C:\
  |__📁Games
    |__📁Favorite
      |__ 📁Nier_automata
      |__ 📁Terraria
      |__ 📁Skyrim
      |__ 📁Dragons_dogma
```



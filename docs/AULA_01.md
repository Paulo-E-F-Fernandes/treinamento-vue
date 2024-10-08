> [Home](../README.md)

### Caso o _Node.js_ já esteja instalado

- Se o _Node.js_ já estiver instalado na máquina, deve verificar se a versão instalada é pelo menos na versão 6.X;
- Para verificar a versão instalada, utilizar o comando `node -v` no terminal:
  - Isso é necessário, pois necessitamos da versão atualizada para que não ocorra erros na durante o projeto.

### Instalação do _Node.js_ no _Linux (Ubuntu)_

- No Ubuntu, através do terminal (permissão de administrador necessária) execute o comando:
  - `sudo apt-get install -y nodejs`
  - **OBS.:** Em algumas distribuições _Linux_, pode haver conflito de nomes quando o _Node_ é instalado pelo apt-get. Neste caso, o binário deixada de ser chamado _node_, e passa a se chamar _nodejs_. Isso gera problemas, pois a instrução **npm start** não funcionará, já que será procurado por _node_ e não _nodejs_. Para resolver isso no Ubuntu, executar o comando abaixo e depois disso, o comando **npm start** funcionará conforme esperado:
    - `sudo ln -s /usr/bin/nodejs /usr/bin/node`

### Instalação do _Node.js_ no _Windows_

- Acessar a página do _[Node.js](https://nodejs.org/pt)_;
- Baixar o instalador clicando no botão de _download_;
- Durante a instalação, apenas clicar nos botões para continuar o assistente.
  - **Obs.:** Não altera a pasta padrão do _Node.js_ durante a instalação, a não ser que você saiba exatamente o que está fazendo.

### Instalação do _Node.js_ no _MAC_

- O _[homebrew](https://brew.sh/)_ é a maneira mais recomendada para instalar o _Node.js_ na máquina _Apple_, através do comando:
  ```
  brew update
  brew install node
  ```
- Caso não utilize o _homebrew_, pode apenas baixar o instalador diretamente da página do _[Node.js](https://nodejs.org/pt)_.

### _IDE_ recomendada: _Visual Studio Code_

- É recomendado o uso do _Visual Studio Code (VSCode)_, _IDE_ gratuita criada pela _Microsoft_ e disponível para _Windows_, _Linux_ e _MAC_;
- Pode ser baixada em https://code.visualstudio.com/download;

#### Sintaxe colorida _(sintaxe highlight)_ com _Visual Studio Code_ e _Vue_

- Caso o _VSCode_ não esteja com marcação de cores, recomenda-se instalar a extensão para melhor visualização de arquivos _.vue_.
- Com o _VSCode_ aberto, ir no menu _View_ -> _Extensions_;
- O campo de busca de extensões seja exibido;
  - Digite "vue" e escolha a opção ~~"vue" do "Liuji-jim"~~ "Vue - Official" da vuejs.org.
- Depois de instalada a extensão, é necessário reiniciar o _VSCode_ para que a extensão seja carregada.

> [Home](../README.md)
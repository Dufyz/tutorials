# Git

# Conceitos básicos

- Repositório: Um repositório do Git é um armazenamento virtual para projetos. Ele permite que você salve versões do código, que você pode acessar quando precisar.

- Branch: As branches separam fluxos de trabalho (normalmente conhecidos como versões). As contribuições sempre são feitas para um branch específico e estão no escopo do mesmo. Todos os repositórios contêm uma ramificação padrão (normalmente chamada "main") e uma ou mais ramificações que serão mescladas novamente na ramificação padrão. A ramificação padrão funciona como a versão atual e "única fonte de verdade" para o projeto. Ele é o pai e todos os outros branches no repositório são criados dele.

- Uma solicitação de pull é uma maneira fácil para um colaborador propor um conjunto de alterações que serão aplicadas ao branch padrão. As alterações (também conhecidas como confirmações) são armazenadas no branch de um colaborador, permitindo que o GitHub modele primeiro o impacto da mesclagem deles no branch padrão. Uma solicitação de pull também serve como um mecanismo para fornecer ao colaborador comentários de um processo de build/validação, do revisor da solicitação de pull, a fim de resolver possíveis problemas ou perguntas antes de mesclar as alterações no branch padrão.


# Comandos básicos e seus usos

`$git init` Cria e inicializa um repositório local na sua máquina.

`$git clone <url>` Clona um repositório remoto já existente.

`$git status` Verifica se há mudanças locais que não estão presentes no repositório.

`$git add .` ou  `$git add <arquivo>` Adiciona as mudanças locais ao repositório.

`git commit` Salva as alterações do código ao repositório.

`$git push` Envia atualizações para o repositório remoto.

`$git pull` Recebe atualizaçães do repositório remoto.

`$git restore <arquivo>` Volta o arquivo ao último "checkpoint" do último commit versionado.

`$git checkout <arquivo>`  Descarta as mudanças em algum arquivo específico.

`$git checkout <branch> ` Altera a branch de trabalho.

`$git branch` Lista todas as branchs do repositório.

`$git fetch` Recebe branchs remotas que não estão listadas no repositório local.

# Exemplos práticos

# Criando um repositório no GitHub

Vá até seu [GitHub](https://github.com/) e crie um repositório. Sinta-se livre pra configurar o repositório aos seus modos. 
![image](https://user-images.githubusercontent.com/80853300/221009477-33d3b353-fed1-4c4f-ac74-6435cc32c8b7.png)

Você será redirecionado para uma página semelhante a essa: 

![image](https://user-images.githubusercontent.com/80853300/221010087-239c8be9-b480-49b4-80dc-0e92332cfad1.png)

Aqui temos o link do seu repositório caso deseje clonar-lo com `git clone <url>` :

![image](https://user-images.githubusercontent.com/80853300/221010375-d4d3ce14-c42c-4d03-afa3-e6d8f80876ba.png)

Aqui temos um tutorial fornecido pelo próprio GitHub sobre como criar um novo repositório ou enviar um repositório local já existente para o repositório remoto.

![image](https://user-images.githubusercontent.com/80853300/221010549-eb51c694-b195-4a54-af0e-009be47f7a07.png)

# Criando um repositório do zero

Seguiremos criando um repositório desde o inicío a partir do terminal (também é possível fazer o processo atráves do terminal do VsCode caso se sinta mais à vontade).

`git init "repositorioLocal"` Iniciando um repositório e criando a pasta "repositorioLocal" dentro da pasta.

`git branch -M main` Tomando acesso da branch main do nosso repositório.

`git remote add origin https://github.com/Dufyz/repositorioGit.git` Vinculando nosso repositório local ao nosso repositório remoto.

`git push -u origin main` Enviando branch main para o repositório remoto para que seja possível salvarmos nossas alterações no código.

Ao criarmos qualquer alteração no nosso repositório, por exemplo a criação de um arquivo "index.html" ou alterações em um arquivo já existente, devemos utilizar os seguintes comandos:

`git commit -a -m "Criando o arquivo index.html"` Adicionando todas as alterações com a extensão "-a" e salvando-as com o comando "commit". A extensão "-m" serve para adicionar-mos uma descrição as alterações que estamos fazendo.

`git push` Enviando todas as alterações locais para o repositório remoto. 

# Clonando um repositório 

No caso de acabarmos deletando nossos repositórios locais,ou tendo a necessidade de acessar os repositórios por outra máquina, é possível que clonemos os repositórios a partir de nosso GitHub.

`git clone https://github.com/Dufyz/repositorioGit.git` Clonando repositório para nossa máquica local.

Agora no caso de qualquer alteração que fizermos é possível que mandemos as mudanças para o nosso repositório remoto utilizando os comando `git commit -a -m "message"` e `git push`.

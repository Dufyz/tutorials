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

`$git push` Envia atualizações para o repositório remoto

`$git pull` Recebe atualizaçães do repositório remoto.

`$git restore <arquivo>` Volta o arquivo ao último "checkpoint" do último commit versionado.

`$git checkout <arquivo>`  Descarta as mudanças em algum arquivo específico.

`$git checkout <branch> ` Altera a branch de trabalho.

`$git branch` Lista todas as branchs do repositório.

`$git fetch` Recebe branchs remotas que não estão listadas no repositório local.
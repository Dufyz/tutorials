# Linux

# Conceitos básicos

-   `sudo` - O sudo é um utilitário de linha de comando para permitir usuários normais a executarem outros utilitários com permissões mais elevadas, de acordo com as suas regras. Ou seja, o sudo controla os acessos dos usuários normais ao "super-usuário" do sistema, também conhecido como root.  A ideia do sudo é justamente ser o antecedente de cada comando para elevar a sua permissão!

`$ sudo su`  Para mudar para o usuário root.

# Comandos básicos e seus usos

-   `pwd` - Mostra o diretório do arquivo atual.
    
-   `ls` - Lista todos os arquivos e pastas presentes no diretório atual.
 
    -   `-l` - Lista arquivos em formato longo.
    -   `-h` - Lista arquivos ocultos.
    -   `-@` - Mostra atributos estendidos.
   
-   `cd` - Mudar diretório
    -   `.` - Permanece no diretório atual.
    -   `..` - Volta para um diretório acima.
    -   `/` - O diretório root ou a separação de diretórios para o caminho.
    -   `~` - Volta o diretório para a home.
    -   `-` Volta para o diretório anterior ao que você estava.
  
-   `tree` - Mostra a árvore de arquivos e/ou pastas do diretório atual.
    -   `d` - diretórios
    -   `a` - mostra arquivos ocultos

<!-- 
-   `cat` - concatena e/ou mostra o conteúdo de um arquivo
    -   `n` - enumera as linhas
 
-   `tail` - lista as últimas linhas do arquivo
    -   `NÚMERO` - mostra a quantidade de linhas que for adicionado em `NÚMERO`.
    -   `f` - continua assistindo o arquivo em busca de novos dados.

-   `wc` - conta linhas, palavras e caracteres
    -   `l` - linhas
    -   `m` - caracteres
    -   `w` - palavras
--> 

-   `cp` - copia arquivos ou diretórios
    -   `R` - copia o diretório em modo recursivo
        
        **Obs.:** Segundo o `man` (manual) do `cp`, se tiver uma barra (/) no final do diretório original, `cp` pode copiar apenas o conteúdo do diretório e não o diretório em si (eu não vi isso ocorrer em testes).
        
-   `mv` - Move ou renomeia arquivos e diretórios.
    
-   `mkdir` - Cria um diretório.
        
-   `rm` - apaga arquivos e diretórios 
    -   `R` - Modo recursivo para diretórios
    -   `f` - Modo forçado e silencioso
    
-   `touch` - Muda os tempos de acesso e modificação de um arquivo. Grande parte dos casos, usamos este comando para criar um arquivo vazio.
  
-   `nano` - Editor de textos
-   `file` - Mostra o tipo do arquivo
-   `history` - Histórico de comandos já digitados
-   `pkill` - Mata processos
-   `whoami` - Mostra seu usuário
-   `hostname` - Mostra o nome do seu computador
-   `uname` - Mostra dados sobre o sistema
-   `ps aux` - Mostra todos os processos rodando no sistema no momento da execução

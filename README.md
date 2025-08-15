# Desafio custom node n8n 🛫
Projeto desenvolvido para a vaga de Desenvolvedor(a) RPA Pleno | Node.js para empresa [Onfly](https://onfly.gupy.io/).

## 📌 Objetivo Principal
Desenvolver um conector do [N8N](https://n8n.io/) que recebe um input de mínimo e máximo inteiro (ambos inclusos) para retornar um número aleatório!
Com integração com a api [Random.org](https://www.random.org/).

## 🧰 Tecnologias Utilizadas
Uma tabela com as tecnologias utilizadas nesse projeto e suas versões:

| Tecnologias | Versões |
|-------------|---------|
| Node.js     | 22.25.0 |
| TypeScript  | 5.9.2   |
| Docker      | 28.2.2  |
| n8n-core    | 1.14.1  |
| n8n-workflow| 1.82.0  |
| Postgresql  |  17.6   |
| Git         | 2.46.0  |

## 📂 Estrutura de pastas
Organização das pastas e arquivos do projeto com uma descrição sobre suas funções e responsabilidades.

- ``src`` - organizar e abrigar todo o código-fonte da aplicação.
- ``custom-nodes`` - pasta raiz dos nós personalizados.
- ``.gitignore`` -  arquivo para ignorar arquivos.
- ``package-lock.json`` - garantir a instalação determinística e reprodutível do projeto.
- ``package.json`` -  arquivo central que define todas as metainformações sobre o projeto 
- ``tsconfig.json`` - arquivo de configuração que diz ao compilador do TypeScript (TSC) como ele deve se comportar.
- ``random-number`` - pasta com nó personalizado (Pascal case).
- ``RandomNumber.node.ts`` - arquivo principal do nó, com a interface e implementação.
- ``dist`` - pasta gerada pelo build.
- ``RandomNumber.node.js`` - arquivo gerado pelo build.
- ``docker-compose.yml`` - ferramenta que permite definir e executar múltiplos containers Docker em um único arquivo.
- ``README.md`` - documentação do projeto 

## 📝 Pré-Requesitos
Antes de iniciar, tenha instalado no seu computador:

1. [**Git**](https://git-scm.com/downloads) – para clonar o repositório do projeto. 

2. [**Docker** + **Docker Compose**](https://www.docker.com/products/docker-desktop/) – para criar e rodar os containers.

3. [**Conta no Docker Hub**](https://hub.docker.com/) – para autenticar e puxar imagens públicas (como Postgres)

4. [**Node.js**](https://nodejs.org/) *(opcional, para rodar localmente)*

5. [**VS Code**](https://code.visualstudio.com/) *(opcional, mas recomendado)*

## ✅ Passo a Passo para Instalação
1 - Primeiro você vai precisar clonar o projeto no repositorio com esse codigo na sua máquina
```
git clone https://github.com/JeronimoSantos/desafio-custon-node-n8n.git 
```

2 - Entre na pasta do projeto
```
cd desafio-custon-node-n8n
```

3 - Fazer login no Docker Hub
```
docker login
```

4 - Subir os containers
```
docker-compose up -d --build
```

5 - Verificar se está rodando
```
docker ps
```

6 - Rodar testes no container
```
docker exec -it desafio-vaga-dos-sonhos-n8n-1 npm test
```

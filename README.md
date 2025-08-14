# Desafio custom node n8n 🛫


## 📌 Objetivo Principal
Desenvolver um conector do n8n que recebe um input de mínimo e máximo inteiro (ambos inclusos) para retornar um número aleatório!

## 🧰 Tecnologias Utilizadas
Uma tabela com as tecnologias utilizadas nesse projeto e suas versões:

| Tecnologias | Versões |
|-------------|---------|
| Node.js     | 22.25.0 |
| TypeScript  | 5.9.2   |
| Docker      | 28.2.2  |
| n8n-core    | 1.14.1  |
| n8n-workflow| 1.82.0  |
| Postgres    |         |
| Git         | 2.46.0  |

## 📂 Estrutura de pastas


- ``src`` - organizar e abrigar todo o código-fonte da aplicação.
- ``custom-nodes`` - pasta raiz dos nós personalizados.
- ``.gitignore`` -  arquivo para ignorar arquivos.
- ``package-lock.json`` - garantir a instalação determinística e reprodutível do projeto.
- ``package.json`` -  arquivo central que define todas as metainformações sobre o projeto 
- ``tsconfig.json`` - arquivo de configuração que diz ao compilador do TypeScript (TSC) como ele deve se comportar.
- ``random-number`` - pasta com nó personalizado (Pascal case).
- ``RandomNumber.node.ts`` - arquivo principal do nó, com a interface e implementação.
- ``dist`` - 
- ``RandomNumber.node.js`` - 
- ``docker-compose.yml`` - arquivo docker para 
- ``README.md`` - documentação do projeto 

## 📝 Pré-Requesitos


## ✅ Passo a Passo para Instalação
1 - Primeiro você vai precisar clonar o projeto no repositorio com esse codigo na sua máquina
```
git clone https://github.com/JeronimoSantos/desafio-custon-node-n8n.git 
```

2 - Entre na pasta do projeto
```
cd desafio-custon-node-n8n
```

📦 API Connect
API RESTful para gerenciamento de usuários — desenvolvida como MVP para a disciplina de Desenvolvimento Back-end da Cruzeiro do Sul.

🎯 Objetivo
Esta API foi desenvolvida para simular um sistema de cadastro e gerenciamento de usuários, servindo como base para estudos de arquitetura REST, validação de dados e integração com ferramentas de teste. O projeto utiliza uma estrutura de dados em memória para persistência temporária, permitindo agilidade no desenvolvimento e validação de funcionalidades.

🧰 Tecnologias Utilizadas
Node.js — Ambiente de execução JavaScript

Express — Framework para construção da API

dotenv — Gerenciamento de variáveis de ambiente

Git — Controle de versão

GitHub — Hospedagem do repositório

📁 Estrutura do Projeto
text
📂 api-connect/
├── 📂 src/
│   └── 📂 backend/
│       ├── 📂 model/
│       │   └── userRepository.js   # Lógica de persistência em memória
│       └── 📂 server/
│           └── server.js           # Configuração e rotas da API
├── .env.example                     # Exemplo de variáveis de ambiente
├── .gitignore                       # Arquivos ignorados pelo Git
├── package.json                     # Dependências e scripts
└── README.md                        # Documentação do projeto
🚀 Como Executar Localmente
Pré-requisitos
Node.js (versão 14 ou superior)

Git (opcional, para clonar o repositório)

Passo a Passo
Clone o repositório

bash
git clone https://github.com/GabrielALPorto/api-connect.git
cd api-connect
Instale as dependências

bash
npm install
Configure as variáveis de ambiente

Copie o arquivo .env.example para .env

Ajuste as configurações se necessário (porta, etc.)

Inicie o servidor

bash
npm start
Ou, para desenvolvimento com auto-reload:

bash
npm run dev
A API estará disponível em:

text
http://localhost:3000
🔌 Endpoints da API
Método	Endpoint	Descrição	Status de Sucesso	Status de Erro
POST	/users	Cria um novo usuário	201 (Created)	400 (Bad Request)
GET	/users	Lista todos os usuários	200 (OK)	—
GET	/users/:id	Busca um usuário por ID	200 (OK)	404 (Not Found)
PUT	/users/:id	Atualiza um usuário existente	200 (OK)	404 (Not Found)
DELETE	/users/:id	Remove um usuário	204 (No Content)	404 (Not Found)
📨 Exemplos de Requisições
1. Criar um usuário (POST /users)
Requisição:

bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"João Silva","age":25,"email":"joao@email.com"}'
Resposta (201 Created):

json
{
  "data": {
    "id": 1,
    "name": "João Silva",
    "age": 25,
    "email": "joao@email.com"
  }
}
2. Listar todos os usuários (GET /users)
Requisição:

bash
curl http://localhost:3000/users
Resposta (200 OK):

json
{
  "data": [
    {
      "id": 1,
      "name": "João Silva",
      "age": 25,
      "email": "joao@email.com"
    }
  ]
}
3. Buscar um usuário por ID (GET /users/:id)
Requisição:

bash
curl http://localhost:3000/users/1
Resposta (200 OK):

json
{
  "data": {
    "id": 1,
    "name": "João Silva",
    "age": 25,
    "email": "joao@email.com"
  }
}
Erro (404 Not Found):

json
{
  "error": "Usuário não encontrado"
}
4. Atualizar um usuário (PUT /users/:id)
Requisição:

bash
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"João Silva Santos"}'
Resposta (200 OK):

json
{
  "data": {
    "id": 1,
    "name": "João Silva Santos",
    "age": 25,
    "email": "joao@email.com"
  }
}
5. Remover um usuário (DELETE /users/:id)
Requisição:

bash
curl -X DELETE http://localhost:3000/users/1
Resposta: 204 No Content (sem corpo)

Erro (404 Not Found):

json
{
  "error": "Usuário não encontrado"
}
🧪 Testes com Postman / Insomnia / Thunder Client
Para testar a API, você pode importar a coleção abaixo ou utilizar diretamente os comandos curl fornecidos.

Ambiente recomendado:

Thunder Client — Extensão para VS Code

Postman — Ferramenta standalone

Insomnia — Ferramenta leve

📋 Validações Implementadas
Campo	POST	PUT
name	Obrigatório e não vazio	Se enviado, não pode ser vazio
email	Obrigatório e não vazio	Se enviado, não pode ser vazio
age	Opcional	Opcional
Exemplo de erro de validação (400 Bad Request):

json
{
  "error": "O campo 'email' é obrigatório e não pode estar vazio"
}
📝 Observações
A persistência dos dados é feita em memória (array de objetos), portanto, os dados são perdidos ao reiniciar o servidor.

Esta abordagem é intencional para simular um MVP (Produto Mínimo Viável) e facilitar testes rápidos.

Em versões futuras, a persistência poderá ser substituída por um banco de dados real (PostgreSQL, MongoDB, etc.).

👨‍💻 Autor
Gabriel A. L. Porto

GitHub

📚 Referências
Express.js Documentation

HTTP Status Codes

REST API Tutorial

📄 Licença
Este projeto foi desenvolvido para fins educacionais, como parte do curso de Análise e Desenvolvimento de Sistemas da Cruzeiro do Sul.



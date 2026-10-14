# 💬 Uatizap - Integração Frontend & API Backend (SENAI-SP)

Este projeto é uma aplicação web de mensagens estilo WhatsApp, desenvolvida para integrar uma interface gráfica estática a um servidor backend em **Node.js/Express**, cumprindo os requisitos práticos do laboratório do SENAI-SP.

O sistema suporta cadastro de novos usuários, autenticação via rota de login e o envio de mensagens em chat através de requisições assíncronas com a `Fetch API`.

---

## 🛠️ Como foi feito

A aplicação foi estruturada de forma modular, separando a lógica do servidor das páginas da interface:

### 1. Backend (Node.js & Express)
* **Servidor HTTP:** Criado com Express escutando na porta `3000`.
* **Servidor de Arquivos Estáticos:** Configurado através do middleware `express.static('front_whatsapp')`, permitindo que o Node.js sirva a interface diretamente no navegador.
* **Liberação de CORS:** Implementado middleware com os cabeçalhos `Access-Control-Allow-*` no arquivo `main.js` para garantir que o navegador não bloqueie as requisições assíncronas.
* **Roteamento de API (`routes/auth.route.js`):**
  * `POST /registrar`: Recebe e processa os dados de criação de conta enviados pela interface.
  * `POST /auth`: Realiza a autenticação recebendo as credenciais via `Query Params` (`?telefone=...&senha=...`).
  * `POST /chat`: Recebe a mensagem e os dados do destinatário em payload `JSON`.

### 2. Frontend (HTML5, CSS3 e JavaScript Vanilla)
* **Interface:** Telas estilizadas para navegação simples entre cadastro, login e painel de chat.
* **Integração Assíncrona (`js/script.js`):** Uso de `async/await` com a `Fetch API` para comunicar com o servidor sem necessidade de recarregar a página.
* **Manipulação de dados:**
  * Envio de dados via `FormData` na rota de cadastro.
  * Envio de dados na URL (`Query Params`) no login.
  * Envio de objetos serializados via `JSON.stringify()` no chat.

---

## 🚀 Como usar

### Pré-requisitos
Certifique-se de ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (versão 14 ou superior)
* [Git](https://git-scm.com/)

---

### 1. Clonar o Repositório
Abra o terminal e execute:
```bash
git clone https://github.com/reuel456/Whatsapp_api.git
cd Whatsapp_api
```

---

### 2. Instalar Dependências
Instale todos os pacotes necessários configurados no `package.json`:
```bash
npm install
```

---

### 3. Iniciar o Servidor
Execute o comando para ligar o backend:
```bash
node main.js
```
A mensagem abaixo deverá aparecer no terminal:
```text
Servidor Online em http://localhost:3000
```

---

### 4. Testar a Aplicação

1. Abra o seu navegador e acesse:
   ```text
   http://localhost:3000
   ```

2. **Criar uma Conta (`POST /registrar`):**
   * Preencha os campos **Apelido**, **Senha** e **Telefone**.
   * Clique em **Criar Conta**. Uma mensagem de confirmação do servidor será exibida na tela.

3. **Realizar Login (`POST /auth`):**
   * Digite o seu **Telefone** e **Senha**.
   * Clique em **Entrar** para validar as credenciais.

4. **Enviar Mensagem (`POST /chat`):**
   * Digite o **Telefone do Destinatário** e o texto da **Mensagem**.
   * Clique em **Enviar** para disparar o pedido em formato JSON para o servidor.

---

## 📂 Estrutura do Projeto

```text
.
├── front_whatsapp/          # Interface do usuário (Frontend)
│   ├── index.html           # Página HTML principal com formulários
│   ├── css/                 # Arquivos de estilo
│   └── js/
│       └── script.js        # Lógica de integração e chamadas Fetch
├── routes/
│   └── auth.route.js        # Definição das rotas da API (/registrar, /auth, /chat)
├── .gitignore               # Arquivos ignorados pelo Git (node_modules)
├── main.js                  # Ponto de entrada do servidor Node.js/Express
├── package.json             # Dependências e scripts do Node.js
└── README.md                # Documentação do projeto
```

---

## 👤 Autor

Desenvolvido por **Reuel** para as atividades laboratoriais do **SENAI-SP**.

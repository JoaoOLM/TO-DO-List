# To-Do List • ![Ativo](https://img.shields.io/badge/Ativo-green)

Este é um sistema de To-Do List desenvolvido como parte de um processo seletivo. O sistema permite a criação de múltiplas listas de tarefas, com a possibilidade de adicionar, editar e excluir itens em cada lista.

## Funcionalidades
Os requisitos do sistemas podem ser verificados no seguinte documento: [Requisitos](https://docs.google.com/document/d/1tfS278ynzns3iPplM9BwIOekVXQgkaPvygiyJBQtocQ/edit?usp=sharing)
- Criar várias listas de To-Do.
- Adicionar vários itens a cada lista.
- Marcar itens como concluídos ou excluí-los.
- Persistência dos dados utilizando Firebase (Firestore).
- Interface responsiva para dispositivos móveis e desktops.

## Funcionalidades Adicionais (Extras)

- Editar tarefas após criadas.
- Datas de vencimento para cada tarefa.
- Armazenamento de dados no Firebase (sincronização em tempo real).
- Modo escuro e modo claro.

## Tecnologias Utilizadas

- **Frontend**: React 
- **Backend**: Firebase 
- **Gerenciamento de Estado**: `useState` 
- **Estilização**: CSS3 
- **Hospedagem**: Firebase Hosting 

## Pré-requisitos

Para rodar o projeto localmente, você precisará de:

- Node.js (>= v14)
- Gerenciador de pacotes `npm` ou `yarn`
- Conta no Firebase (para configurar o backend)

## Instalação e Execução

### 1. Clone o repositório:
```bash
  git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2. Entre no diretório do projeto:
```bash
  cd nome-do-projeto
```

### 3. Instale as dependências:
```bash
  npm install
  ou
  yarn install
```
  
### 4. Configuração do Firebase
Crie um projeto no Firebase Console.
Crie um banco de dados Firestore.
Copie as configurações de SDK do Firebase e crie um arquivo .env na raiz do projeto:
```bash
  REACT_APP_FIREBASE_API_KEY=your-api-key
  REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
  REACT_APP_FIREBASE_PROJECT_ID=your-project-id
  REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
  REACT_APP_FIREBASE_APP_ID=your-app-id
```

### 5. Execute o projeto:
  ```bash
  npm start
  # ou
  yarn start  
```

## Como Usar
- Ao abrir o sistema, crie uma nova lista de To-Do clicando no botão "Nova Lista".  
- Adicione itens à lista clicando no botão "Adicionar Tarefa".  
- Edite ou exclua itens conforme necessário.  
- As listas e tarefas serão salvas automaticamente utilizando o Firebase.  

## Ideias de Melhorias Futuras
- Implementar notificações para tarefas com datas de vencimento.
- Adicionar suporte a múltiplos usuários utilizando Firebase Authentication.
- Exportar listas de tarefas como .csv ou .txt.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Contato
Em caso de dúvidas ou sugestões sinta-se livre para entrar em contato pelo meu email: joao.moraes@estudante.ufscar.br

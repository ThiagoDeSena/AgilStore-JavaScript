# 📦 AgilStore - Gestão de Inventário

O **AgilStore** é uma solução robusta desenvolvida em Node.js para automatizar o controle de estoque de lojas de eletrônicos. Este projeto foi migrado de uma base Java para JavaScript, aplicando conceitos avançados de arquitetura de software para garantir escalabilidade, manutenção facilitada e persistência de dados.

## 🚀 Tecnologias Utilizadas

* **Node.js**: Ambiente de execução para o JavaScript no lado do servidor.
* **JavaScript (ES6+)**: Utilizando classes, módulos e manipulação moderna de arrays.
* **Readline-sync**: Biblioteca para interação síncrona com o usuário via terminal.
* **File System (fs)**: Persistência de dados nativa em formato JSON.

---

## 🏗️ Arquitetura do Projeto

Diferente de scripts simples, este projeto foi estruturado seguindo o princípio de **Responsabilidade Única (SRP)**:

* **`index.js`**: Ponto de entrada que gerencia apenas a interface (CLI) e interação com o usuário.
* **`src/models`**: Define a estrutura dos objetos de dados.
* **`src/services`**: Camada de lógica de negócio (CRUD e validações).
* **`src/persistence`**: Camada responsável por salvar e ler os dados do disco.
* **`src/constants`**: Armazena valores fixos (Enums) como as categorias de produtos.

---

## 🔧 Como rodar a aplicação localmente

Para um usuário leigo ou desenvolvedor, siga estes passos:

1. **Instale o Node.js**: Baixe e instale a versão LTS no site oficial [nodejs.org](https://nodejs.org/).
2. **Baixe o Projeto**: Faça o download ou clone o repositório.
3. **Abra o Terminal**: Navegue até a pasta do projeto.
4. **Instale as Dependências**: Digite o comando abaixo e aperte Enter:
```bash
npm install

```


5. **Inicie o Programa**: Digite o comando abaixo e aperte Enter:
```bash
node index.js

```



---

## 🖥️ Guia de Uso (Passo a Passo)

### 1. Adicionar um Novo Produto

Para cadastrar um item, escolha a opção **1**. O sistema solicitará o nome, a categoria (baseada em uma lista fixa), a quantidade e o preço.

<p align="center">
 <img width="400" height="625" alt="image" src="https://github.com/user-attachments/assets/461a6281-b0f1-4238-8c14-87d1bee687cc" />
</p>

> *Dica: O ID é gerado automaticamente pelo sistema.*

### 2. Listar e Ordenar Produtos

Ao escolher a opção **2**, você verá todos os produtos. O sistema permite ordenar a visualização por Nome, Preço ou Quantidade para facilitar a análise.

<p align="center">
 <img width="724" height="463" alt="image" src="https://github.com/user-attachments/assets/5d534369-bb37-4507-acc0-9d3611e8d5f7" />
</p>

### 3. Atualizar Informações

Caso precise alterar um dado, escolha a opção **3** e informe o ID do produto. Você pode escolher exatamente qual campo deseja alterar (apenas o nome, ou apenas o preço, etc).

<p align="center">
<img width="430" height="492" alt="image" src="https://github.com/user-attachments/assets/ac36d796-fdac-46d6-b6db-4f073e538ce3" />
</p>

### 4. Excluir Produto

A opção **4** permite remover itens do inventário. Para sua segurança, o sistema sempre solicitará uma confirmação (Sim/Não) antes de apagar o dado.

### 5. Buscar Produtos

Você pode localizar rapidamente um item pelo seu **ID** ou por uma **parte do nome** usando a opção **5**.

---

## 📁 Persistência de Dados

O sistema salva automaticamente todas as alterações em um arquivo chamado `database.json` dentro da pasta `src/data/`. Isso significa que, mesmo se você fechar o programa ou desligar o computador, seus dados estarão salvos.

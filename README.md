# 📦 AgilStore - Gestão de Inventário

O **AgilStore** é uma solução robusta desenvolvida em Node.js para automatizar o controle de estoque de lojas de eletrônicos. Este projeto foi migrado de uma base Java para JavaScript, aplicando conceitos avançados de arquitetura de software para garantir escalabilidade, manutenção facilitada e persistência de dados.

<p align="center">
<img width="413" height="255" alt="image" src="https://github.com/user-attachments/assets/068d9ff0-41c8-4a9c-abba-7cb1aa03ac62" />
</p>

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

<p align="center">
<img width="572" height="352" alt="image" src="https://github.com/user-attachments/assets/17ea40e4-eaff-4de8-a4cd-3329427f0ca7" />
</p>

<p align="center">
 <img width="675" height="449" alt="image" src="https://github.com/user-attachments/assets/6750d3d5-effd-4d3c-9a18-f4050717dfcc" />
</p>

### 5. Buscar Produtos

Você pode localizar rapidamente um item pelo seu **ID** ou por uma **parte do nome** usando a opção **5**.

<p align="center">
<img width="729" height="457" alt="image" src="https://github.com/user-attachments/assets/3515c0b3-c474-4ce5-a959-db7c9fa66eaf" />
</p>


---

## 📁 Persistência de Dados

O sistema salva automaticamente todas as alterações em um arquivo chamado `database.json` dentro da pasta `src/data/`. Isso significa que, mesmo se você fechar o programa ou desligar o computador, seus dados estarão salvos.

```bash
[
  {
    "id": 2,
    "nome": "Notebook lenovo",
    "categoria": "COMPUTADORES",
    "quantidade": 365,
    "preco": 2000
  },
  {
    "id": 3,
    "nome": "Samsung A14 5G",
    "categoria": "SMARTPHONES",
    "quantidade": 504,
    "preco": 1200
  }
]

```

## Desenvolvedor 

<div align="center">
  <img src="https://github.com/user-attachments/assets/55b10cab-bbaf-4dd1-bcbc-2d9752e37cf5" width="100px;" style="border-radius: 50%;" alt="Foto do Desenvolvedor"/>
  <br />
  <sub><b>Thiago De Sena</b></sub>
  <br />
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thiago-de-sena-developer/)
</div>


---

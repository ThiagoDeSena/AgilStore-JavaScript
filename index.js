const readline = require('readline-sync');
const inventario = require('./src/services/Inventario');
const Categorias = require('./src/constants/Categorias');

function exibirMenu() {
    console.log("\n========================================");
    console.log("       AGILSTORE - GESTÃO DE ESTOQUE");
    console.log("========================================");
    console.log("1 - Adicionar Produto");
    console.log("2 - Listar Produtos (Filtros/Ordem)");
    console.log("3 - Atualizar Produto");
    console.log("4 - Excluir Produto");
    console.log("5 - Buscar Produto (ID ou Nome)");
    console.log("0 - Sair");
    console.log("========================================");
}

function iniciarApp() {
    let rodando = true;

    while (rodando) {
        exibirMenu();
        const opcao = readline.question("Escolha uma opcao: ");

        switch (opcao) {
            case '1':// ADICIONAR
                const nome = readline.question("Nome do Produto: ");
                console.log("\nCategorias disponíveis:");
                console.table(Categorias);
                const catId = readline.questionInt("Selecione o ID da Categoria: ");
                const qtd = readline.questionInt("Quantidade em estoque: ");
                const preco = readline.questionFloat("Preco: R$ ");
                
                inventario.adicionar(nome, Categorias[catId] || "OUTROS", qtd, preco);
                console.log("\nProduto cadastrado com sucesso!");
                break;

            case '2':// LISTAR
                let produtos = [...inventario.listar()];
                console.log("\nDeseja ordenar por: 1-Nome | 2-Quantidade | 3-Preco | 0-Sem ordem");
                const ordem = readline.question("Opcao: ");
                
                if (ordem === '1') produtos.sort((a, b) => a.nome.localeCompare(b.nome));
                if (ordem === '2') produtos.sort((a, b) => b.quantidade - a.quantidade);
                if (ordem === '3') produtos.sort((a, b) => b.preco - a.preco);

                console.table(produtos);
                break;

            case '3': // ATUALIZAR
                const idAtu = readline.questionInt("\nDigite o ID do produto para atualizar: ");
                const pExistente = inventario.buscarPorId(idAtu);

                if (!pExistente) {
                    console.log("Produto não encontrado!");
                } else {
                    console.log(`\nEditando: ${pExistente.nome}`);
                    const novosDados = {};
                    
                    if (readline.keyInYNStrict("Deseja alterar o NOME?")) 
                        novosDados.nome = readline.question("Novo Nome: ");
                    
                    if (readline.keyInYNStrict("Deseja alterar a CATEGORIA?")) {
                        console.table(Categorias);
                        const nCat = readline.questionInt("Novo ID da Categoria: ");
                        novosDados.categoria = Categorias[nCat];
                    }

                    if (readline.keyInYNStrict("Deseja alterar a QUANTIDADE?"))
                        novosDados.quantidade = readline.questionInt("Nova Quantidade: ");

                    if (readline.keyInYNStrict("Deseja alterar o PRECO?"))
                        novosDados.preco = readline.questionFloat("Novo Preco: ");

                    inventario.atualizar(idAtu, novosDados);
                    console.log("Produto atualizado!");
                }
                break;

            case '4': // EXCLUIR
                const idExc = readline.questionInt("\nDigite o ID para excluir: ");
                const pParaExcluir = inventario.buscarPorId(idExc);

                if (pParaExcluir) {
                    const confirmar = readline.keyInYNStrict(`Tem certeza que deseja remover "${pParaExcluir.nome}"?`);
                    if (confirmar) {
                        inventario.excluir(idExc);
                        console.log("Produto removido!");
                    }
                } else {
                    console.log("Produto não encontrado.");
                }
                break;

            case '5': // BUSCAR
                console.log("\n1 - Buscar por ID | 2 - Buscar por Nome");
                const tipoBusca = readline.question("Opcao: ");
                
                if (tipoBusca === '1') {
                    const id = readline.questionInt("ID: ");
                    const res = inventario.buscarPorId(id);
                    res ? console.table([res]) : console.log("Produto não encontrado.");
                } else {
                    const termo = readline.question("Digite o nome (ou parte dele): ");
                    const resultados = inventario.buscarPorNome(termo);
                    resultados.length > 0 ? console.table(resultados) : console.log("🔍 Nenhum resultado.");
                }
                break;

            case '0':
                console.log("Encerrando AgilStore... Até logo!");
                rodando = false;
                break;

            default:
                console.log("Opção inválida!");
        }
    }
}

iniciarApp();
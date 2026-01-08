const FileHandler = require('../persistence/FileHandler');

class InventarioService {
    constructor() {
        this.produtos = FileHandler.carregar();
    }

    gerarNovoId() {
        if (this.produtos.length === 0) return 1;
        return Math.max(...this.produtos.map(p => p.id)) + 1;
    }

    adicionar(nome, categoria, quantidade, preco) {
        if (!nome || preco < 0 || quantidade < 0) {
            throw new Error("Dados inválidos para cadastro de produto.");
        }

        const novo = { id: this.gerarNovoId(), nome: nome.trim(), categoria, quantidade, preco };
        this.produtos.push(novo);
        FileHandler.salvar(this.produtos);
        return novo;
    }

    listar() {
        return [...this.produtos];
    }

    buscarPorId(id) {
        return this.produtos.find(p => p.id === id);
    }

    buscarPorNome(termo) {
        const busca = termo.toLowerCase();
        return this.produtos.filter(p => p.nome.toLowerCase().includes(busca));
    }

    atualizar(id, novosDados) {
        const index = this.produtos.findIndex(p => p.id === id);
        if (index === -1) return false;
        
        const produtoAtualizado = { ...this.produtos[index], ...novosDados };
        
        if (produtoAtualizado.preco < 0 || produtoAtualizado.quantidade < 0) {
            return false;
        }

        this.produtos[index] = produtoAtualizado;
        FileHandler.salvar(this.produtos);
        return true;
    }

    excluir(id) {
        const inicial = this.produtos.length;
        this.produtos = this.produtos.filter(p => p.id !== id);
        if (this.produtos.length < inicial) {
            FileHandler.salvar(this.produtos);
            return true;
        }
        return false;
    }
}

module.exports = new InventarioService();
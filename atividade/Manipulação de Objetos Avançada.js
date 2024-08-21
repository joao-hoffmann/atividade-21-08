let pessoa = {
    nome: 'João Silva',
    idade: 30,
    profissao: 'Desenvolvedor',
    endereco: {
        rua: 'Rua das Flores',
        cidade: 'São Paulo',
        estado: 'SP'
    },
    apresentacao: function() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
    }
};

console.log(pessoa.endereco.cidade);

pessoa.profissao = 'Analista de Sistemas';
console.log(pessoa);

pessoa.telefone = '1234-5678';
console.log(pessoa);
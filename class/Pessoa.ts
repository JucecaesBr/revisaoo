class pessoa {
    private nome: string;
    private idade: number;
    private sexo: string;
    private endereco: string;

    constructor(nomePessoa: string, idadePessoa: number, sexoPessoa: string, enderecoPessoa: string) {
        this.nome = nomePessoa;
        this.idade = idadePessoa;
        this.sexo = sexoPessoa;
        this.endereco = enderecoPessoa;
    }

    // Métodos getters
    getNome() {
        return this.nome;
    }

    getIdade() {
        return this.idade;
    }

    getSexo() {
        return this.sexo;
    }

    getEndereco() {
        return this.endereco;
    }

    // Métodos setters
    setNome(nomeNovo: string) {
        this.nome = nomeNovo;
    }

    setIdade(valor: number) {
        this.idade = valor;
    }

    setSexo(sexoNovo: string) {
        this.sexo = sexoNovo;
    }

    setEndereco(enderecoNovo: string) {
        this.endereco = enderecoNovo;
    }
}

export { pessoa };

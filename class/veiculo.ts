class veiculo {
    private marca:string
    private modelo:string
    private ano:number
    private preco:number
    constructor(marca:string,modelo:string,ano:number,preco:number){
        this.marca =marca
        this.modelo =modelo
        this.ano =ano
        this.preco =preco
    }
    // Métodos getters
    getMarca() {
        return this.marca;
    }

    getModelo() {
        return this.modelo;
    }

    getAno() {
        return this.ano;
    }

    getPreco() {
        return this.preco;
    }

    //metodos set

    setMarca(marcaNova:string){
        this.marca=marcaNova
    }

    setModelo(modeloNovo:string){
        this.modelo=modeloNovo
    }
    setAno(anoNovo:number){
        this.ano=anoNovo
    }
    setPreco(precoNovo){
        this.preco=precoNovo
    }
}

export{veiculo}
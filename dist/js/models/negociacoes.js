export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    //Método para adicionar uma Negociação dentro do array "Negociações"
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //Método para listar Negociação dentro do array "Negociações" Obs: O ReadonlyArray só permite leitura do Array
    lista() {
        return this.negociacoes;
    }
}

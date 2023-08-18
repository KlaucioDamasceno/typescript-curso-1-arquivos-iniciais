import { Negociacao } from "./negociacao";

export class Negociacoes {
    private  negociacoes: Array<Negociacao> = [];


    //Método para adicionar uma Negociação dentro do array "Negociações"
    public adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }
    //Método para listar Negociação dentro do array "Negociações" Obs: O ReadonlyArray só permite leitura do Array
    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}

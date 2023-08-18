export class Negociacao{
  
    //construtor da classe Negociação
    constructor(private _data : Date, public readonly _quantidade : number, public readonly _valor : number){}

    //método de acesso (get) do atributo data
    get data(): Date{
        return this._data;
    }
    //método de acesso (get) do atributo quantidade
    get quantidade(): number{
        return this._quantidade;
    }

    //método de acesso (get) do atributo valor
    get valor(): number{
        return this._valor;
    }

    //método de acesso (get) do atributo volume
    get volume():number{
        return this._quantidade * this._valor;
    }
}
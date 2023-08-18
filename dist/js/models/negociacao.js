export class Negociacao {
    //construtor da classe Negociação
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    //método de acesso (get) do atributo data
    get data() {
        return this._data;
    }
    //método de acesso (get) do atributo quantidade
    get quantidade() {
        return this._quantidade;
    }
    //método de acesso (get) do atributo valor
    get valor() {
        return this._valor;
    }
    //método de acesso (get) do atributo volume
    get volume() {
        return this._quantidade * this._valor;
    }
}

/// <reference path="../typings/requirejs/require.d.ts" />
/// <reference path='../TypeScript.Net/System/Collections/Generic/List.ts' />
/// <reference path='../TypeScript.Net/System/Collections/Generic/Dictionary.ts' />
/// <reference path='../typings/qunit/qunit.d.ts' />

interface ICo {
    getLogo(): string;
    setLogo(input: string): void;

    getNome(): string;
    setNome(input: string): void;

    getCreci(): number;
    setCreci(input: number): void;

    getEndereco(): string;
    setEndereco(input: string): void;

    getTelefone(): string;
    setTelefone(input: string): void;


    getIm(): System.Collections.Generic.List<IImo>;
    setIm(input: System.Collections.Generic.List<IImo>);
}

interface IImo {
    getId(): number;
    setId(input: number): void;

    getCodigo(): string;
    setCodigo(input: string): void;

    getFinalidade(): string;
    setFinalidade(input: string): void;

    getTipo(): string;
    setTipo(input: string): void;

    getCidade(): string;
    setCidade(input: string): void;

    getBairro(): string;
    setBairro(input: string): void;

    getEndereco(): string;
    setEndereco(input: string): void;

    getAreaTotal(): string;
    setAreaTotal(input: string): void;

    getAreaConstruida(): string;
    setAreaConstruida(input: string): void;

    getValorTotal(): string;
    setValorTotal(input: string): void;

    getCo(): ICo;
    setCo(input: ICo): void;

    getImProp(): System.Collections.Generic.List<IImProp>;
    setImProp(value: System.Collections.Generic.List<IImProp>): void;

    getDescricao(): string;
    setDescricao(input: string): void;

    getObservacao(): string;
    setObservacao(input: string): void;

    getFotos(): System.Collections.Generic.Dictionary<string, string>;
    setFotos(input: System.Collections.Generic.Dictionary<string, string>): void;
}

interface IImProp {
    getTitulo(): string;
    setTitulo(input: string);

    getQuantidade(): string;
    setQuantidade(input: string);
}

module Im {
    export class Co implements ICo {

        private _Logo: string;
        getLogo(): string { return this._Logo; }
        setLogo(input: string): void { this._Logo = input; }

        private _Nome: string;
        getNome(): string { return this._Nome; }
        setNome(input: string): void { this._Nome = input; }

        private _Creci: number;
        getCreci(): number { return this._Creci; }
        setCreci(input: number): void { this._Creci = input; }

        private _Endereco: string;
        getEndereco(): string { return this._Endereco; }
        setEndereco(input: string): void { this._Endereco = input; }

        private _Telefone: string;
        getTelefone(): string { return this._Telefone; }
        setTelefone(input: string): void { this._Telefone = input; }

        private _Im: System.Collections.Generic.List<IImo>;
        getIm(): System.Collections.Generic.List<IImo> { return this._Im; }
        setIm(input: System.Collections.Generic.List<IImo>) { this._Im = input; }

    }

    export class Imo implements IImo {
        constructor() { }

        private _Id: number;
        getId(): number { return this._Id; }
        setId(input: number): void { this._Id = input; }

        private _Codigo: string;
        getCodigo(): string { return this._Codigo; }
        setCodigo(input: string): void { this._Codigo = input; }

        private _Finalidade: string;
        getFinalidade(): string { return this._Finalidade; }
        setFinalidade(input: string): void { this._Finalidade = input; }

        private _Tipo: string;
        getTipo(): string { return this._Tipo; }
        setTipo(input: string): void { this._Tipo = input; }

        private _Cidade: string;
        getCidade(): string { return this._Cidade; }
        setCidade(input: string): void { this._Cidade = input; }

        private _Bairro: string;
        getBairro(): string { return this._Bairro; }
        setBairro(input: string): void { this._Bairro = input; }

        private _Endereco: string;
        getEndereco(): string { return this._Endereco; }
        setEndereco(input: string): void { this._Endereco = input; }

        private _AreaTotal: string;
        getAreaTotal(): string { return this._AreaTotal; }
        setAreaTotal(input: string): void { this._AreaTotal = input; }

        private _AreaConstruida: string;
        getAreaConstruida(): string { return this._AreaConstruida; }
        setAreaConstruida(input: string): void { this._AreaConstruida = input; }

        private _ValorTotal: string;
        getValorTotal(): string { return this._ValorTotal; }
        setValorTotal(input: string): void { this._ValorTotal = input; }

        private _Co: ICo;
        getCo(): ICo { return this._Co; }
        setCo(input: ICo): void { this._Co = input; }

        private _ImProp: System.Collections.Generic.List<IImProp>;
        getImProp(): System.Collections.Generic.List<IImProp> { return this._ImProp; }
        setImProp(input: System.Collections.Generic.List<IImProp>): void { this._ImProp = input; }

        private _Descricao: string;
        getDescricao(): string { return this._Descricao; }
        setDescricao(input: string): void { this._Descricao = input; }

        private _Observacao: string;
        getObservacao(): string { return this._Observacao; }
        setObservacao(input: string): void { this._Observacao = input; }

        private _Fotos: System.Collections.Generic.Dictionary<string, string>;
        getFotos(): System.Collections.Generic.Dictionary<string, string> { return this._Fotos; }
        setFotos(input: System.Collections.Generic.Dictionary<string, string>): void { this._Fotos = input; }

    }

    export class ImProp implements IImProp {

        private _Titulo: string;
        getTitulo(): string { return this._Titulo; }
        setTitulo(input: string) { this._Titulo = input; }

        private _Quantidade: string;
        getQuantidade(): string { return this._Quantidade; }
        setQuantidade(input: string) { this._Quantidade = input; }

    }
}
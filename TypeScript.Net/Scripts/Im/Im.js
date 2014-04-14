/// <reference path="../typings/requirejs/require.d.ts" />
/// <reference path='../TypeScript.Net/System/Collections/Generic/List.ts' />
/// <reference path='../TypeScript.Net/System/Collections/Generic/Dictionary.ts' />
/// <reference path='../typings/qunit/qunit.d.ts' />

var Im;
(function (Im) {
    var Co = (function () {
        function Co() {
        }
        Co.prototype.getLogo = function () {
            return this._Logo;
        };
        Co.prototype.setLogo = function (input) {
            this._Logo = input;
        };

        Co.prototype.getNome = function () {
            return this._Nome;
        };
        Co.prototype.setNome = function (input) {
            this._Nome = input;
        };

        Co.prototype.getCreci = function () {
            return this._Creci;
        };
        Co.prototype.setCreci = function (input) {
            this._Creci = input;
        };

        Co.prototype.getEndereco = function () {
            return this._Endereco;
        };
        Co.prototype.setEndereco = function (input) {
            this._Endereco = input;
        };

        Co.prototype.getTelefone = function () {
            return this._Telefone;
        };
        Co.prototype.setTelefone = function (input) {
            this._Telefone = input;
        };

        Co.prototype.getIm = function () {
            return this._Im;
        };
        Co.prototype.setIm = function (input) {
            this._Im = input;
        };
        return Co;
    })();
    Im.Co = Co;

    var Imo = (function () {
        function Imo() {
        }
        Imo.prototype.getId = function () {
            return this._Id;
        };
        Imo.prototype.setId = function (input) {
            this._Id = input;
        };

        Imo.prototype.getCodigo = function () {
            return this._Codigo;
        };
        Imo.prototype.setCodigo = function (input) {
            this._Codigo = input;
        };

        Imo.prototype.getFinalidade = function () {
            return this._Finalidade;
        };
        Imo.prototype.setFinalidade = function (input) {
            this._Finalidade = input;
        };

        Imo.prototype.getTipo = function () {
            return this._Tipo;
        };
        Imo.prototype.setTipo = function (input) {
            this._Tipo = input;
        };

        Imo.prototype.getCidade = function () {
            return this._Cidade;
        };
        Imo.prototype.setCidade = function (input) {
            this._Cidade = input;
        };

        Imo.prototype.getBairro = function () {
            return this._Bairro;
        };
        Imo.prototype.setBairro = function (input) {
            this._Bairro = input;
        };

        Imo.prototype.getEndereco = function () {
            return this._Endereco;
        };
        Imo.prototype.setEndereco = function (input) {
            this._Endereco = input;
        };

        Imo.prototype.getAreaTotal = function () {
            return this._AreaTotal;
        };
        Imo.prototype.setAreaTotal = function (input) {
            this._AreaTotal = input;
        };

        Imo.prototype.getAreaConstruida = function () {
            return this._AreaConstruida;
        };
        Imo.prototype.setAreaConstruida = function (input) {
            this._AreaConstruida = input;
        };

        Imo.prototype.getValorTotal = function () {
            return this._ValorTotal;
        };
        Imo.prototype.setValorTotal = function (input) {
            this._ValorTotal = input;
        };

        Imo.prototype.getCo = function () {
            return this._Co;
        };
        Imo.prototype.setCo = function (input) {
            this._Co = input;
        };

        Imo.prototype.getImProp = function () {
            return this._ImProp;
        };
        Imo.prototype.setImProp = function (input) {
            this._ImProp = input;
        };

        Imo.prototype.getDescricao = function () {
            return this._Descricao;
        };
        Imo.prototype.setDescricao = function (input) {
            this._Descricao = input;
        };

        Imo.prototype.getObservacao = function () {
            return this._Observacao;
        };
        Imo.prototype.setObservacao = function (input) {
            this._Observacao = input;
        };

        Imo.prototype.getFotos = function () {
            return this._Fotos;
        };
        Imo.prototype.setFotos = function (input) {
            this._Fotos = input;
        };
        return Imo;
    })();
    Im.Imo = Imo;

    var ImProp = (function () {
        function ImProp() {
        }
        ImProp.prototype.getTitulo = function () {
            return this._Titulo;
        };
        ImProp.prototype.setTitulo = function (input) {
            this._Titulo = input;
        };

        ImProp.prototype.getQuantidade = function () {
            return this._Quantidade;
        };
        ImProp.prototype.setQuantidade = function (input) {
            this._Quantidade = input;
        };
        return ImProp;
    })();
    Im.ImProp = ImProp;
})(Im || (Im = {}));
//# sourceMappingURL=Im.js.map

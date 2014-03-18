interface ISelectList {
    SelectedValue(): string;

    GetEnumerator(): System.Collections.Generic.List<System.Web.Mvc.SelectListItem>;
}


module System.Web.Mvc {

    export class SelectList implements ISelectList {
        private _DataValueField: string;
        private _DataTextField: string;
        private _SelectedValue: string;
        private _Itens: System.Collections.Generic.List<System.Web.Mvc.SelectListItem>;

        constructor(itens: any, dataValueField: string, dataTextField: string, selectedValue: string) {
            this._DataValueField = dataValueField;
            this._DataTextField = dataTextField;
            this._SelectedValue = selectedValue;

            this._Itens = new System.Collections.Generic.List<System.Web.Mvc.SelectListItem>();
            for (var x = 0; x < itens.length; x++) {
                var list = new System.Web.Mvc.SelectListItem();
                list.setValue(itens[dataValueField]);
                list.setText(itens[dataTextField]);
                this._Itens.Add(list);
            }
        }

        public SelectedValue(): string {
            return this._SelectedValue;
        }

        public GetEnumerator(): System.Collections.Generic.List<System.Web.Mvc.SelectListItem> {
            return this._Itens;
        }
    }

}
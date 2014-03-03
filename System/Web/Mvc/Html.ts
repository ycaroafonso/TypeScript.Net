interface IHtml {
    DropDownList(name: string, selectList: ISelectList): string;
}


module System.Web.Mvc {

    export class Html implements IHtml {

        public DropDownList(name: string, selectList: ISelectList): string {
            return "";
        }

    }

}
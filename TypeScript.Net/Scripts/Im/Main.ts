/// <reference path='Im.ts' />
/// <reference path='../TypeScript.Net/System/Collections/Generic/List.ts' />
/// <reference path='../TypeScript.Net/System/Collections/Generic/Dictionary.ts' />
/// <reference path='../TypeScript.Net/System/Convert.ts' />


export class Main {

    MontarListagem(): void {
        var h: string = document.body.innerHTML;

        var ims = new System.Collections.Generic.List<IImo>();

        h.match(/<input name="compara\[\]" value="(\d+)" type="checkbox"><\/td>\n\t+<td><p style=".*" class="imoveis"><a href="pop_view.htm\\?id=([A-Za-z0-9\=]+)" target="_blank" class="busca" title="Clique para ver \+ Detalhes"><img src="(stored\/imoveis\/\w+.jpg|images\/img_comfoto.gif)" style=".*" border="0" height="54" width="72"><\/a><\/p><\/td>\n\t+<td><p style=".*" class="imoveis"><a href="pop_view.htm\\?id=[A-Za-z0-9\=]+" target="_blank" class="busca" title="Clique para ver \+ Detalhes">([^<]*)<br><b>([^<]*)<\/b><br>([^<]*)<\/a><\/p><\/td>\n\t+<td><p style=".*" class="imoveis"><a href="pop_view.htm\\?id=[A-Za-z0-9\=]+" target="_blank" class="busca" title="Clique para ver \+ Detalhes">([^<]*|)<br><b>([^<]*)<\/b><br>([^<]*)<\/a><\/p><\/td>\n\t+<td align="right"><p style=".*" class="imoveis"><a href="pop_view.htm\\?id=[A-Za-z0-9\=]+" target="_blank" class="busca" title="Clique para ver \+ Detalhes"><font class="t_orange"><b><font style="font-size:13px;">([\d\.\,^<]+)/gi)
            .forEach(function (txt) {
                var im = txt.match(/<input name="compara\[\]" value="(\d+)" type="checkbox"><\/td>\n\t+<td><p style=".*" class="imoveis"><a href="pop_view.htm\\?id=([A-Za-z0-9\=]+)" target="_blank" class="busca" title="Clique para ver \+ Detalhes"><img src="(stored\/imoveis\/\w+.jpg|images\/img_comfoto.gif)" style=".*" border="0" height="54" width="72"><\/a><\/p><\/td>\n\t+<td><p style=".*" class="imoveis"><a href="pop_view.htm\\?id=[A-Za-z0-9\=]+" target="_blank" class="busca" title="Clique para ver \+ Detalhes">([^<]*)<br><b>([^<]*)<\/b><br>([^<]*)<\/a><\/p><\/td>\n\t+<td><p style=".*" class="imoveis"><a href="pop_view.htm\\?id=[A-Za-z0-9\=]+" target="_blank" class="busca" title="Clique para ver \+ Detalhes">([^<]*|)<br><b>([^<]*)<\/b><br>([^<]*)<\/a><\/p><\/td>\n\t+<td align="right"><p style=".*" class="imoveis"><a href="pop_view.htm\\?id=[A-Za-z0-9\=]+" target="_blank" class="busca" title="Clique para ver \+ Detalhes"><font class="t_orange"><b><font style="font-size:13px;">([\d\.\,^<]+)/i);

                var imaa: IImo = new Im.Imo();

                imaa.setId(System.Convert.ToInt32(im[1]));
                imaa.setCodigo(im[2]);

                ims.Add(imaa);
            });
    }

    MontarImo(): void {
        var h: string = document.body.innerHTML;

        var imo: IImo = new Im.Imo();

        var cor: ICo = new Im.Co();
        cor.setLogo(h.match(/<img src=\"redim_logo.htm\?image=stored\/corretores\/([0-9\_]+).jpg/i)[1]);
        var dadosCorretor = h.match(/<font class="t_orange"><b>([^<]*)<\/b><\/font><br><font class="t_marrom">\n\t+Corretor\(a\) de Imóveis<br>\n\t+CRECI: (\d+)<br><img src="images\/transp.gif" alt="" border="0" height="5" width="1"><br>\n\t+([^<]*)<br><img src="images\/transp.gif" alt="" border="0" height="5" width="1"><br>\n\t+<img src="images\/img_fig_fone.gif" alt="" align="absmiddle" border="0"><img src="images\/transp.gif" alt="" border="0" height="1" width="5"><b>([^<]*)<\/b><\/font><\/td>/i);
        cor.setNome(dadosCorretor[1]);
        cor.setCreci(System.Convert.ToInt32(dadosCorretor[2]));
        cor.setEndereco(dadosCorretor[3]);
        cor.setTelefone(dadosCorretor[4]);
        imo.setCo(cor);

        imo.setFinalidade(h.match(/Finalidade:<\/td>\n\t+<td class="t_marrom" colspan="3">([^<]*)<\/td>/i)[1]);
        imo.setTipo(h.match(/Tipo:<\/td>\n\t+<td class="t_marrom" colspan="3">([^<]*)<\/td>/i)[1]);
        imo.setCidade(h.match(/Cidade:<\/td>\n\t+<td class="t_marrom" colspan="3">([^<]*)<\/td>/i)[1]);
        imo.setBairro(h.match(/Bairro:<\/td>\n\t+<td class="t_marrom" colspan="3">([^<]*)<\/td>/i)[1]);
        imo.setEndereco(h.match(/Endereço:<\/td>\n\t+<td class="t_marrom" colspan="3" valign="top">([^<]*)/i)[1]);
        imo.setAreaTotal(h.match(/Área total:<\/td><td class="t_marrom">([^<]*)/i)[1]);
        imo.setAreaConstruida(h.match(/Área construída:<\/td><td class="t_marrom" valign="bottom">([^<]*)/i)[1]);
        imo.setValorTotal(h.match(/Valor total: <b>R$ ([\d\.\,^<]+)/i)[1]);


        var prop: IImProp
    }
}
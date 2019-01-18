/** 
 * Funções JS auxiliares
 * Última modificação em 18/01/2019
 * Desenvolivido por @mathmed
 * https://github.com/mathmed   
 * PW Admin - Todos os direitos reservados.
**/

/* Importando jquery */
import "jquery/dist/jquery.js";
import $ from "jquery";

/* Verificando se o jquery foi iniciado */
$(document).ready(function(){
    
    $("#form-criar-conta-admin").submit(function(ev){
        $.ajax({
            type: 'dw',
            url: 'dwa',
            data: 'dw',
            success: function (data) {
                alert('ok');
            }
        });
        ev.preventDefault();
    })

})
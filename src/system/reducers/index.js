/** 
 * Arquivo de store dos reducers
 * Última modificação em 15/01/2019
 * Desenvolivido por @mathmed
 * https://github.com/mathmed   
 * PW Admin - Todos os direitos reservados.
**/

/* Importações necessárias */
import { combineReducers } from 'redux';

import login_reducer from "./login_reducer.js";

/* Retornando os reducers combinados */
export default combineReducers({

    login_reducer

});
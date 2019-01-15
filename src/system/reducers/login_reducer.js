/** 
 * Reducer utilizado na tela de Login
 * Última modificação em 15/01/2019
 * Desenvolivido por @mathmed
 * https://github.com/mathmed   
 * PW Admin - Todos os direitos reservados.
**/


/* Estado inicial das variáveis */
const INITIAL_STATE = {

    login: "",
    senha: "",
    loading: false

};

/* modificando estados do reducer */
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {

        case "login_andamento":
            return{...state, loading:true}

        case "altera_login":
            return{...state, login:action.payload}
    
        case "altera_senha":
            return{...state, senha:action.payload}
        default:
            return state;
	}
};


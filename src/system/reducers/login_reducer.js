/** 
 * Reducer utilizado na tela de Login
 * Última modificação em 17/01/2019
 * Desenvolivido por @mathmed
 * https://github.com/mathmed   
 * PW Admin - Todos os direitos reservados.
**/


/* Estado inicial das variáveis */
const INITIAL_STATE = {

    login: "",
    senha: "",
    loading: false,
    loading_check_newuser: true,
    check_novousuario_error: false,
    create_account: false

};

/* modificando estados do reducer */
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {

        case "allow_create_account":
            return{...state, create_account: true, check_novousuario_error: false, loading_check_newuser: false}

        case "deny_create_account":
            return{...state, create_account: false, check_novousuario_error: false, loading_check_newuser: false }

        case "requisicao_verificar_andamento":
            return{...state, loading_check_newuser: true, check_novousuario_error: false}

        case "check_novousuario_error":    
            return{...state, loading_check_newuser: false, check_novousuario_error: true}

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


/** 
 * Reducer utilizado na tela de Login
 * Última modificação em 18/01/2019
 * Desenvolivido por @mathmed
 * https://github.com/mathmed   
 * PW Admin - Todos os direitos reservados.
**/


/* Estado inicial das variáveis */
const INITIAL_STATE = {
    login_criar_conta: "",
    senha_criar_conta: "",
    senha_confere_criar_conta: "",
    email_criar_conta: "",
    login: "",
    senha: "",
    loading: false,
    loading_check_newuser: true,
    loading_criar_conta: false,
    check_novousuario_error: false,
    create_account: false,
    erro_conexao: false,
    erro_autenticacao: false,
    user: ""

};

/* modificando estados do reducer */
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {

        case "criar_conta_andamento":
            return{...state, loading_criar_conta: true}

        case "erro_login_conexao":
            return{...state, senha: "", loading: false, erro_conexao:true}

        case "usuario_senha_errados":
            return{...state, senha: "", loading: false, erro_autenticacao: true}

        case "login_sucesso":
            return{...state, user:action.payload, loading: false}

        case "allow_create_account":
            return{...state, create_account: true, check_novousuario_error: false, loading_check_newuser: false}

        case "deny_create_account":
            return{...state, create_account: false, check_novousuario_error: false, loading_check_newuser: false }

        case "requisicao_verificar_andamento":
            return{...state, loading_check_newuser: true, check_novousuario_error: false}

        case "check_novousuario_error":    
            return{...state, loading_check_newuser: false, check_novousuario_error: true}

        case "login_andamento":
            return{...state, loading:true, erro_autenticacao: false, erro_conexao: false}

        case "altera_login":
            return{...state, login:action.payload}
    
        case "altera_senha":
            return{...state, senha:action.payload}

        case "altera_login_criar_conta":
            return{...state, login_criar_conta:action.payload}
    
        case "altera_senha_criar_conta":
            return{...state, senha_criar_conta:action.payload}

        case "altera_senha_confere_criar_conta":
            return{...state, senha_confere_criar_conta:action.payload}
    
        case "altera_email_criar_conta":
            return{...state, email_criar_conta:action.payload}  
        default:
            return state;
	}
};


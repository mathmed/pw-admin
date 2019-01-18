/** 
 * Actions (funções) utilizadas na tela de Login
 * Última modificação em 17/01/2019
 * Desenvolivido por @mathmed
 * https://github.com/mathmed   
 * PW Admin - Todos os direitos reservados.
**/

/* Função para alterar campos */
export const altera = (texto, campo) => {
    /* Retornando o texto para o reducer responsável pela alteração */
    return {
        type: "altera_" + campo,
        payload: texto.target.value
    }
}

/* Função para chamar a API e tentar realizar o Login */
export const loginAPI = (user, pass) => {

    /* Retornando o dispatch */
    return dispatch => {

        /* Verificando se os campos foram preenchdos */
        if(user && pass){

        dispatch({type:"login_andamento"})

        /* Chamando a API */
        /* Iniciando uma promessa e o fetch com o servidor */
        new Promise((resolve, reject) => {

            fetch("http://138.68.13.220:8082/auth", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user, pass
                })
            })

            /* Verificando o resultado da requisição */
            .then(response => {

                /* verificando se a requisição foi realizada com sucesso */
                if(response.status == 200){
                    response.json().then((responseJson) => {

                        /* Retornando o dispatch de finalizado */
                        dispatch({type:"login_sucesso", payload: responseJson})
                    })

                /* Verificando o porquê da conexão não ter sido realizada */
                }else if(response.status == 401) dispatch({type:"usuario_senha_errados"})
                
                else dispatch({type:"erro_login_conexao"})
                
            }).catch(() => dispatch({type:"erro_login_conexao"}));
        })
    }
    }
}


/* Função para verificar se é o primeiro acesso do usuário no sistema */
export const verificar_primeiro_acesso = () => {

    /* Retornando o dispatch */
    return dispatch => {

        /* Resetando status */
        dispatch({type:"requisicao_verificar_andamento"})

        /* Chamando a API */
        /* Iniciando uma promessa e o fetch com o servidor */
        new Promise((resolve, reject) => {

            fetch("http://138.68.13.220:8082/user/admin_not_exists", {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })

            /* Verificando o resultado da requisição */
            .then(response => {

                /* verificando se a requisição foi realizada com sucesso */
                if(response.status == 200){
                    response.json().then(() => {

                        /* Retornando o dispatch */
                        dispatch({type: "allow_create_account"})
                    })

                /* Verificando o porquê da conexão não ter sido realizada */
                }else if(response.status == 401) dispatch({type: "deny_create_account"})

                else dispatch({type: "check_novousuario_error"})
                
            }).catch((err) => dispatch({type: "check_novousuario_error"}));
        })
    }

}


/* Função para criar um conta de administrador no sistema */
export const criarContaAdmin = (username, passwd, passwd2, email) => {

    /* Retornando o Dispatch */
    return dispatch => {

        /* Avisando que a conta está sendo criada */
        dispatch({type: "criar_conta_andamento"});

        /* Verificando se os campos foram preenchidos */
    }
}




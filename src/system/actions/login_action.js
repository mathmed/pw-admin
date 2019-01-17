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
export const loginAPI = (login, senha) => {

    /* Retornando o dispatch */
    return dispatch => {

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
                    login, senha
                })
            })

            /* Verificando o resultado da requisição */
            .then(response => {

                console.log(response.status);

                /* verificando se a requisição foi realizada com sucesso */
                if(response.status == 200){
                    response.json().then((responseJson) => {
                        /* Retornando o dispatch de finalizado */
                        console.log(response);
                    })

                }else console.log('Error');
                
            })

            .catch((err) => console.log(err));
        })

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

            fetch("http://138.68.13.220:8082/", {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })

            /* Verificando o resultado da requisição */
            .then(response => {

                console.log(response.status);

                /* verificando se a requisição foi realizada com sucesso */
                if(response.status == 200){
                    response.json().then((responseJson) => {

                        /* Verificando qual foi o retorno */
                        if(response.json().result) dispatch({type: "allow_create_account"})
                        else dispatch({type: "deny_create_account"})

                        
                    })

                }else dispatch({type: "check_novousuario_error"})
                
            })

            .catch((err) => dispatch({type: "check_novousuario_error"}));
        })
    }

}




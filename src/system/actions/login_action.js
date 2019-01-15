/** 
 * Actions (funções) utilizadas na tela de Login
 * Última modificação em 15/01/2019
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

            fetch("", {
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

                /* verificando se a requisição foi realizada com sucesso */
                if(response.status == 200){
                    response.json().then((responseJson) => {
                        /* Retornando o dispatch de finalizado */
                        dispatch({})
                    })

                }else console.log('Error');
                
            })

            .catch((err) => console.log(err));
        })

    }

} 
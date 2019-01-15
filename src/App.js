
/** 
 * Arquivo Main do sistema, primeira a ser chamado
 * Última modificação em 15/01/2019
 * Desenvolivido por @mathmed
 * https://github.com/mathmed   
 * PW Admin - Todos os direitos reservados.
**/


/* Importações necessárias */
import reducers from './system/reducers/index.js';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import React from "react";

import Routes from "./routes.js";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

import {Provider} from 'react-redux';;

/* Adicionando biblioteca de ícones */
library.add(faIgloo)


/* Iniciando classe Main da aplicação */
export default class App extends React.Component {
    render() {
      return (
        /* criando a a store dos reducers e chamando as rotas da aplicação */
        <Provider store = {createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <Routes />
        </Provider>
      );
    }
  }

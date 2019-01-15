/** 
 * Classe de Login do sistema
 * Última modificação em 15/01/2019
 * Desenvolivido por @mathmed
 * https://github.com/mathmed   
 * PW Admin - Todos os direitos reservados.
**/

/* Importações necessárias */
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';

/* Actions */
import {altera, loginAPI} from "../system/actions/login_action.js";

import { faSignInAlt, faSpinner } from '@fortawesome/free-solid-svg-icons'

/* Iniciando a classe */
class Login extends React.Component{

    render(){
        return (
            <form>
            <div className = "container">
                <div className = "center margin-top">
                    <img src = {require("../assets/images/logo.png")} className = "img-logo"></img>
                </div>
                <div className = "center margin-top">
                    <h1 className = "label-title">Login Administrativo</h1>
                </div>

                <div className = "center margin-top">
                    <div className = "half-form">
                        <div className = "form-group">
                            <label className = "input-label">Nome de usuário</label>
                            <input onChange = {(texto) => this.props.altera(texto, "login")} value = {this.props.login} className = "form-control" placeholder = "Insira o nome de usuário"/>
                        </div>
                        <div className = "form-group">
                            <label required className = "input-label">Senha</label>
                            <input onChange = {(texto) => this.props.altera(texto, "senha")} value = {this.props.senha} type = "password" required className = "form-control" placeholder = "Insira a senha"/>
                        </div>

                        <div className = "form-group center">
                            {!this.props.loading ? 
                                <button type = "button" onClick = {() => this.props.loginAPI(this.props.login, this.props.senha)} className = "btn btn-primary">Entrar<FontAwesomeIcon className="icon-button" icon={faSignInAlt} /></button>
                                : 
                                <FontAwesomeIcon className = "blue" size = "2x" spin icon={faSpinner} />
                            }
                                
                            </div>
                    </div>
                </div>
                <div className = "center margin-top">
                    <a href = "/first" className = "label">Primeiro acesso? Clique aqui</a>
                </div>    
            </div>
            </form>
        )
    }
}

/* Mapeando variáveis do Reducer */
const mapStateToProps = state => (
    {
        login: state.login_reducer.login,
        senha: state.login_reducer.senha,
        loading: state.login_reducer.loading
    }
);

/* Exportando informações */
export default connect (mapStateToProps, {altera, loginAPI})(Login);
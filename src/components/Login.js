/** 
 * Classe de Login do sistema
 * Última modificação em 17/01/2019
 * Desenvolivido por @mathmed
 * https://github.com/mathmed   
 * PW Admin - Todos os direitos reservados.
**/

/* Importações necessárias */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';

/* Actions */
import {altera, loginAPI, verificar_primeiro_acesso} from "../system/actions/login_action.js";

import { faSignInAlt, faSpinner, faSadTear, faSync } from '@fortawesome/free-solid-svg-icons'

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
                    <a onClick = {() => this.props.verificar_primeiro_acesso()} data-target = "#primeiro-acesso" data-toggle = "modal" className = "label primeiro-acesso fromRight">Primeiro acesso? Clique aqui</a>
                </div> 

                <div className="modal" tabIndex="-1" role="dialog" id = "primeiro-acesso">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title"><b>Primeiro acesso</b></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {
                                
                                this.props.loading_check_newuser ? 

                                <div class = "center column">
                                    <label class = "input-label">Aguarde, estamos verificando se é e seu primero acesso...</label>
                                    <FontAwesomeIcon className = "blue" size = "2x" spin icon={faSpinner} />
                                </div>

                                : (this.props.check_novousuario_error ?

                                    
                                    <div class = "column">
                                        <label class = "input-label small">Ocorreu um erro com sua requisição ao servidor, tente novamente mais tarde <FontAwesomeIcon className = "blue" size = "lg" icon={faSadTear} /></label>
                                        <button type = "button" onClick = {() => this.props.verificar_primeiro_acesso()} className = "btn btn-primary">Tentar novamente<FontAwesomeIcon className="icon-button" icon={faSync} /></button>
                                    </div>
                                    
                                : <label>Susususcesooo</label>
                                    
                                )
                        }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        </div>
                        </div>
                    </div>
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
        loading: state.login_reducer.loading,
        loading_check_newuser: state.login_reducer.loading_check_newuser,
        check_novousuario_error: state.login_reducer.check_novousuario_error,
        return_check: state.login_reducer.return_check
    }
);

/* Exportando informações */
export default connect (mapStateToProps, {altera, loginAPI, verificar_primeiro_acesso})(Login);
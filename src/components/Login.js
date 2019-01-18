/** 
 * Classe de Login do sistema
 * Última modificação em 18/01/2019
 * Desenvolivido por @mathmed
 * https://github.com/mathmed   
 * PW Admin - Todos os direitos reservados.
**/

/* Importações necessárias */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';
import "../assets/js/main";


/* Actions */
import {altera, loginAPI, verificar_primeiro_acesso, criarContaAdmin} from "../system/actions/login_action.js";

import { faSignInAlt, faSpinner, faSadTear, faSync, faCheckDouble } from '@fortawesome/free-solid-svg-icons'


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

                        <div className = "center">
                            {this.props.erro_autenticacao ? 

                                <div className = "alert alert-danger">Usuário e/ou senha inválidos</div> : 
                                
                                (this.props.erro_conexao ? 
                                    <div className = "alert alert-danger">Erro de conexão com servidor, tente novamente.</div> : ""
                                )
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

                                <div className = "center column">
                                    <label className = "input-label">Aguarde, estamos verificando se é e seu primero acesso...</label>
                                    <FontAwesomeIcon className = "blue" size = "2x" spin icon={faSpinner} />
                                </div>

                                : (this.props.check_novousuario_error ?

                                    <div className = "column">
                                        <label className = "input-label small">Ocorreu um erro com sua requisição ao servidor, tente novamente mais tarde <FontAwesomeIcon className = "blue" size = "lg" icon={faSadTear} /></label>
                                        <button type = "button" onClick = {() => this.props.verificar_primeiro_acesso()} className = "btn btn-primary">Tentar novamente<FontAwesomeIcon className="icon-button" icon={faSync} /></button>
                                    </div>
                                    
                                : (this.props.create_account ? 

                                    <div>

                                        <form id = "form-criar-conta-admin">

                                        <div className = "form-group">

                                            <label className = "input-label">Nome de usuário</label>
                                            <input value = {this.props.login_criar_conta} onChange = {(texto) => this.props.altera(texto, "login_criar_conta")} name = "username" className = "form-control"/>

                                        </div>
                                        <div className = "form-group">

                                            <label className = "input-label">Senha</label>
                                            <input value = {this.props.senha_criar_conta} onChange = {(texto) => this.props.altera(texto, "senha_criar_conta")} type = "password" name = "passwd" className = "form-control"/>

                                        </div>
                                        <div className = "form-group">
                                            <label className = "input-label">Repita a senha</label>
                                            <input value = {this.props.senha_confere_criar_conta} onChange = {(texto) => this.props.altera(texto, "senha_confere_criar_conta")} type = "password" name = "passwd2" className = "form-control"/>
                                        </div>
                                        <div className = "form-group">
                                            <label className = "input-label">E-mail</label>
                                            <input value = {this.props.email_criar_conta} onChange = {(texto) => this.props.altera(texto, "email_criar_conta")} type = "email" name = "email" className = "form-control"/>
                                        </div>

                                        <div className = "form-group">
                                            {!this.props.loading_criar_conta ?
                                            
                                                <button type = "submit" className = "btn btn-primary">Criar<FontAwesomeIcon className="icon-button" icon={faCheckDouble} /></button>
                                            :
                                                
                                                <FontAwesomeIcon className = "blue" size = "2x" spin icon={faSpinner} />
                                            }
                                        </div>
                                    </form>

                                    </div>

                                        :

                                        <div className = "alert alert-danger">Já existe uma conta cadastrada no servidor, não é seu primeiro acesso.</div> : ""

                                    )
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
        return_check: state.login_reducer.return_check,
        erro_conexao: state.login_reducer.erro_conexao,
        erro_autenticacao: state.login_reducer.erro_autenticacao,
        create_account: state.login_reducer.create_account,
        login_criar_conta: state.login_reducer.login_criar_conta,
        senha_criar_conta: state.login_reducer.senha_criar_conta,
        senha_confere_criar_conta: state.login_reducer.senha_confere_criar_conta,
        email_criar_conta: state.login_reducer.email_criar_conta,
        loading_criar_conta: state.login_reducer.loading_criar_conta
    }
);

/* Exportando informações */
export default connect (mapStateToProps, {altera, loginAPI, verificar_primeiro_acesso, criarContaAdmin})(Login);
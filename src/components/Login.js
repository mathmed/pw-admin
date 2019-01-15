import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

export default class Login extends React.Component{

    render(){
        return (
            <div class = "container">
                <div class = "center margin-top">
                    <img src = {require("../assets/images/logo.png")} class = "img-logo"></img>
                </div>
                <div class = "center margin-top">
                    <h1 class = "label-title">Login Administrativo</h1>
                </div>

                <div class = "center margin-top">
                    <div class = "half-form">
                        <div class = "form-group">
                            <label class = "input-label">Nome de usuário</label>
                            <input class = "form-control" placeholder = "Insira o nome de usuário"/>
                        </div>
                        <div class = "form-group">
                            <label required class = "input-label">Senha</label>
                            <input type = "password" required class = "form-control" placeholder = "Insira a senha"/>
                        </div>

                        <div class = "form-group center">
                            <button class = "btn btn-primary">Entrar<FontAwesomeIcon className="icon-button" icon={faSignInAlt} /></button>
                        </div>
                    </div>
                </div>
                <div class = "center margin-top">
                    <a href = "/first" class = "label">Primeiro acesso? Clique aqui</a>
                </div>    
            </div>
        )
    }
}
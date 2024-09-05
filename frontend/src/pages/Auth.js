import React, { useState } from 'react';
import './Auth.css';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="auth-container">
            <div className="form-container">
                <h1>{isLogin ? 'Login' : 'Cadastro'}</h1>
                <form>
                    {!isLogin && (
                        <>
                            <div className="input-group">
                                <label htmlFor="name">Nome:</label>
                                <input type="text" id="name" placeholder="Seu nome completo" />
                            </div>
                        </>
                    )}
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="Seu email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" placeholder="Sua senha" />
                    </div>
                    <button type="submit" className="auth-button">
                        {isLogin ? 'Entrar' : 'Cadastrar'}
                    </button>
                </form>
                <p className="toggle-text">
                    {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}{' '}
                    <span onClick={toggleForm} className="toggle-link">
                        {isLogin ? 'Cadastre-se' : 'Faça Login'}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Auth;

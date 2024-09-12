import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, password }),
      });
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao realizar o cadastro.");
    }
  };

  return (
    <div className="auth-container">
      <div className="form-container">
        <h1>{isLogin ? "Login" : "Cadastro"}</h1>
        <form onSubmit={handleSubmit}>
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
            {isLogin ? "Entrar" : "Cadastrar"}
          </button>
        </form>
        <p className="toggle-text">
          {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
          <span onClick={toggleForm} className="toggle-link">
            {isLogin ? "Cadastre-se" : "Faça Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;

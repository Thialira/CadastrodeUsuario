import React, { useState } from 'react';
import './CadastroUsuario.css';

function CadastroUsuario() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cadastroRealizado, setCadastroRealizado] = useState(false);
  const [formPreenchido, setFormPreenchido] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      setFormPreenchido(false);
      return alert('Insira seus dados para realizar o cadastro.');
    }
    if (password !== confirmPassword) {
      setFormPreenchido(false);
      return alert('A senha e a confirmação de senha não correspondem.');
    }
    console.log('Nome de usuário: ', username);
    console.log('E-mail: ', email);
    console.log('Senha: ', password);
    console.log('Confirmação de senha: ', confirmPassword);

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setCadastroRealizado(true);
    setFormPreenchido(true);
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Cadastro de Usuário</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Nome de usuário:
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label>
            E-mail:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            Senha:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <label>
            Confirmar senha:
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </label>
          <button type="submit">Cadastrar</button>
        </form>
        {formPreenchido && cadastroRealizado && (
          <p>Cadastro realizado com sucesso! Obrigado por se cadastrar.</p>
        )}
        {!formPreenchido && <p>Insira seus dados para realizar o cadastro.</p>}
      </div>
    </div>
  );
}

export default CadastroUsuario;

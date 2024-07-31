import React from 'react';
import { CButton, CContainer, CForm, CFormInput, CFormLabel } from '@coreui/react';
import logo from '../logo.png';
import './Cadastro.css';

export default function Cadastro() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  function handleCadastro() {
    // Lógica para cadastrar o usuário
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
  }

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={logo} alt="Marca" className="login-logo" />
      </div>
      <div className="login-right">
        <CContainer className="text-center">
          <div className="form-container">
            <h2>Cadastro de Usuário</h2>
            <CForm>
              <div className="form-field">
                <CFormLabel>Nome</CFormLabel>
                <CFormInput
                  className="input-field"
                  type="text"
                  placeholder="Digite seu nome..."
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                />
              </div>
              <div className="form-field">
                <CFormLabel>Email</CFormLabel>
                <CFormInput
                  className="input-field"
                  type="email"
                  placeholder="Digite seu e-mail..."
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="form-field">
                <CFormLabel>Senha</CFormLabel>
                <CFormInput
                  className="input-field"
                  type="password"
                  placeholder="Digite sua senha..."
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                />
              </div>
              <CButton color="primary" className="login-button" onClick={handleCadastro}>Cadastrar</CButton>
              <CButton color="danger" className="register-button" onClick={() => {/* lógica para voltar ao login */}}>Voltar</CButton>
            </CForm>
          </div>
        </CContainer>
      </div>
    </div>
  );
}

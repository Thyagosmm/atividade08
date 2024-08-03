import React from 'react';
import { CButton, CContainer, CForm, CFormInput, CFormLabel } from '@coreui/react';
import logo from '../logo.png';
import './Login.css';

export default function FormLogin() {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  function handleLogin() {
    // Lógica para autenticar o usuário
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
            <h2>Login</h2>
            <CForm>
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
              <CButton color="primary" className="login-button" onClick={handleLogin}>Acessar</CButton>
              <CButton color="danger" className="register-button" onClick={() => {/* lógica para cadastro */}}>Cadastre-se</CButton>
            </CForm>
          </div>
        </CContainer>
      </div>
    </div>
  );
}

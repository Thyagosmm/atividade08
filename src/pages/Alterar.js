import React from 'react';
import { CButton, CContainer, CForm, CFormInput, CFormLabel } from '@coreui/react';
import logo from '../logo.png';
import './Alterar.css';

export default function Alterar() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [telefone, setTelefone] = React.useState('');

  function handleAlterar() {
    // Lógica para alterar o usuário
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Telefone:', telefone);
  }

  function handleExcluir() {
    // Lógica para excluir o usuário
    console.log('Excluir usuário');
  }

  return (
    <div className="alterar-container">
      <div className="alterar-left">
        <img src={logo} alt="Marca" className="alterar-logo" />
      </div>
      <div className="alterar-right">
        <CContainer className="text-center">
          <div className="form-container">
            <h2>CADASTRO</h2>
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
                <CFormLabel>Telefone</CFormLabel>
                <CFormInput
                  className="input-field"
                  type="tel"
                  placeholder="Digite seu telefone..."
                  value={telefone}
                  onChange={e => setTelefone(e.target.value)}
                />
              </div>
              <CButton color="primary" className="alterar-button" onClick={handleAlterar}>Alterar</CButton>
              <CButton color="danger" className="excluir-button" onClick={handleExcluir}>Excluir</CButton>
            </CForm>
          </div>
        </CContainer>
      </div>
    </div>
  );
}

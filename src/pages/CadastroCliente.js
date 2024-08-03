import React from 'react';
import { CButton, CContainer, CForm, CFormInput, CFormLabel } from '@coreui/react';
import logo from '../logo.png';
import './CadastroCliente.css';

export default function CadastroCliente() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [telefone, setTelefone] = React.useState('');

  function handleSalvar() {
    // Lógica para salvar o cliente
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Telefone:', telefone);
  }

  return (
    <div className="cadastro-cliente-container">
      <div className="cadastro-cliente-left">
        <img src={logo} alt="Marca" className="cadastro-cliente-logo" />
      </div>
      <div className="cadastro-cliente-right">
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
              <CButton color="primary" className="salvar-button" onClick={handleSalvar}>Salvar</CButton>
            </CForm>
          </div>
        </CContainer>
      </div>
    </div>
  );
}

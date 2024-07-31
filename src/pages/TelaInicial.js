import React from 'react';
import { CButton, CContainer, CListGroup, CListGroupItem } from '@coreui/react';
import { cilPeople, cilPlus } from '@coreui/icons';
import CIcon from '@coreui/icons-react'; // Importa o CIcon do pacote correto
import logo from '../logo.png';
import './TelaInicial.css';

export default function TelaInicial() {
  const [users, setUsers] = React.useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]);

  const handleEdit = (userId) => {
    // Navegar para a tela de alteração de cadastro com o ID do usuário
    console.log('Editar usuário:', userId);
  };

  const handleDelete = (userId) => {
    // Lógica para excluir o usuário
    console.log('Excluir usuário:', userId);
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="tela-inicial-container">
      <div className="tela-inicial-left">
        <img src={logo} alt="Marca" className="tela-inicial-logo" />
      </div>
      <div className="tela-inicial-right">
        <CContainer>
          <div className="header">
            <h2>
              User <CIcon icon={cilPeople} className="header-icon" />
            </h2>
            <CButton
              color="primary"
              className="add-button"
              onClick={() => {/* lógica para navegação para tela de cadastro */}}
            >
              <CIcon icon={cilPlus} className="add-icon" /> Adicionar
            </CButton>
          </div>
          <CListGroup className="user-list">
            {users.map(user => (
              <CListGroupItem key={user.id} className="user-item">
                <div>
                  <strong>{user.name}</strong>
                  <p>{user.email}</p>
                </div>
                <div className="user-actions">
                  <CButton color="info" onClick={() => handleEdit(user.id)}>Alterar</CButton>
                  <CButton color="danger" onClick={() => handleDelete(user.id)}>Excluir</CButton>
                </div>
              </CListGroupItem>
            ))}
          </CListGroup>
        </CContainer>
      </div>
    </div>
  );
}

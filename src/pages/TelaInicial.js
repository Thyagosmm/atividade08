import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import { CButton, CContainer, CCard, CCardBody, CCardHeader, CListGroup, CListGroupItem } from '@coreui/react';
import { cilPeople, cilPlus } from '@coreui/icons';
import CIcon from '@coreui/icons-react'; // Importa o CIcon do pacote correto
import logo from '../logo.png';
import './TelaInicial.css';

export default function TelaInicial() {
  const [users, setUsers] = React.useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]);

  const navigate = useNavigate(); // Hook para navegação

  const handleUserClick = (userId) => {
    // Navegar para a tela de alteração de cadastro com o ID do usuário
    console.log('Editar usuário:', userId);
  };

  const handleAddUser = () => {
    // Navegar para a tela de cadastro
    navigate('/cadastro');
  };

  return (
    <div className="tela-inicial-container">
      <div className="tela-inicial-left">
        <img src={logo} alt="Marca" className="tela-inicial-logo" />
      </div>
      <div className="tela-inicial-right">
        <CCard className="user-card">
          <CCardHeader className="user-card-header">
            <h2>
              <CIcon icon={cilPeople} className="header-icon" /> User
            </h2>
            <CButton
              color="primary"
              className="add-button"
              onClick={handleAddUser}
            >
              <CIcon icon={cilPlus} className="add-icon" /> Adicionar
            </CButton>
          </CCardHeader>
          <CCardBody>
            <CListGroup className="user-list">
              {users.map(user => (
                <CListGroupItem
                  key={user.id}
                  className="user-item"
                  onClick={() => handleUserClick(user.id)}
                  action
                >
                  <strong>{user.name}</strong>
                  <p>{user.email}</p>
                </CListGroupItem>
              ))}
            </CListGroup>
          </CCardBody>
        </CCard>
      </div>
    </div>
  );
}

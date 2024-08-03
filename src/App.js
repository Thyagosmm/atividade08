import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormLogin from './pages/Login';
import CadastroUsuario from './pages/CadastroUsuario';
import TelaInicial from './pages/TelaInicial';
import Alterar from './pages/Alterar';
import CadastroCliente from './pages/CadastroCliente';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<FormLogin />} />
        <Route path="/cadastrar" element={<CadastroUsuario />} />
        <Route path="/" element={<TelaInicial />} />
        <Route path="/alterar" element={<Alterar />} />
        <Route path="/cadastrarcliente" element={<CadastroCliente />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormLogin from './pages/Login';
import Cadastro from './pages/Cadastro';
import TelaInicial from './pages/TelaInicial';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<FormLogin />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/" element={<TelaInicial />} />
        <Route path="/alterar" element={<TelaInicial />} />
      </Routes>
    </Router>
  );
}

export default App;

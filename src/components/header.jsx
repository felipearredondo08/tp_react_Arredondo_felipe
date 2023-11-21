import React from 'react';
import './Header.css'; // Puedes crear un archivo CSS específico para el encabezado
import logo from '../assets/pildora.png';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo de la marca" className="logo" />
      <h1>mNEMO</h1>
    </div>
  );
};

export default Header;
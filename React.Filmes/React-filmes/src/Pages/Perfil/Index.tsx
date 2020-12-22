import React from 'react';
import './style.css';
import Footer from '../../components/Footer/Index';
import Header from '../../components/Header/Index';


function Perfil() {
  return (
    <div>
        <Header description="Edite seu perfil, caso necessário"/>
        <div>você está logado</div>
        <Footer/>
    </div>
  );
}

export default Perfil;

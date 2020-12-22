import React from 'react';
import './style.css';
import '../../assets/style/global.css';
import logo from '../../assets/imagens/logo.png';
import {Link, useHistory} from 'react-router-dom';

interface HeaderProps{
  description:string;
  text?:string;
}


const Header:React.FC<HeaderProps> = (props) => {
  let history = useHistory();

  const logout = ()=>{
    localStorage.removeItem('token-filmes');
    localStorage.removeItem('TipoUsuario');
    history.push('/');
  }

  function converterJwt (token:any) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    let tipo = JSON.parse(jsonPayload);
    let acesso = Object.values(tipo)[2];
    
    localStorage.setItem('TipoUsuario', String(acesso));

    return acesso;
};

  const menu = () =>{
    const token = localStorage.getItem('token-filmes');
    
    if(token === undefined || token === null){
      return(
        <ul className="menu">
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/login" className="link">Login</Link></li>
          <li><Link to="/cadastro" className="link">Cadastro</Link></li>
        </ul>
      )
    }else{
      const acesso = converterJwt(token);

      if(acesso === 'Administrador'){
        return(
        <ul className="menu">
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/perfil" className="link">Perfil</Link></li>
          <li><Link to="/Filmes" className="link">Filmes</Link></li>
          <li><Link to="/Generos" className="link">Genero</Link></li>
          <li><Link to="" onClick={event => {
            event.preventDefault();
            logout();
          }}>Logout</Link></li>
        </ul>
      )
    }else{
      return(
        <ul className="menu">
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/Catalogo" className="link">Filmes</Link></li>
          <li><Link to="" onClick={event => {
            event.preventDefault();
            logout();
          }}>Logout</Link></li>
        </ul>
      )
    }
    }
  }

  return (
    <div className="principal">
      <div className="header">
          <div className="align">
            <nav>
                  <Link to="/"><img src={logo} alt="Logotipo da filmes collections"/></Link>
                  {menu()}
            </nav>
            <h3>{props.description}</h3>
            {props.text && <p>{props.text}</p>}
          </div>
      </div>
    </div>
  );
}

export default Header;

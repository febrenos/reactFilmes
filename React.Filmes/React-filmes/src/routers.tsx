import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/Index';
import Cadastro from './Pages/Cadastro/Index';
import Filmes from './Pages/Filmes/Index';
import Genero from './Pages/Generos/Index';
import Home from './Pages/Home/Index';
import Login from './Pages/Login/Index';
import Perfil from './Pages/Perfil/Index';
import Catalogo from './Pages/Usuario/Index';


function Routers(){
     interface RouteProps{
          component: any;
          path:any;
      }
     //Quando o administrador estiver logado
      const RotaPrivada: React.FC<RouteProps> = ({component: Component,path, ...rest}) => {
          var token = localStorage.getItem("token-filmes");
          var acesso = localStorage.getItem("TipoUsuario");
          return (
          <Route 
          render= {props => (token != undefined && acesso === 'Administrador')?
               (
                    <Component path={path}  {...rest} {...props} /> 
               ) : (
                    <Redirect to={{pathname: '/',state: {from: props.location}}}/> 
               )
               } />
        )
      }
      //aqui seria para o usuário não acessar login e cadastro quando estiver deslogado
      const RotaDeslogado: React.FC<RouteProps> = ({component: Component,path, ...rest}) => {
          var token = localStorage.getItem("token-filmes");
          return (
          <Route 
          render= {props => (token === undefined || token === null)?
          (
               <Component path={path}  {...rest} {...props} /> 
          ) : (
               <Redirect to={{pathname: '/',state: {from: props.location}}}/> 
          )
          } />
        )
      }


return(
     <BrowserRouter>
     <Switch>
          <Route path="/" exact component={Home}/>
          <RotaDeslogado path="/login" component={Login}/>
          <RotaDeslogado path="/cadastro" component={Cadastro}/>
          <RotaPrivada path="/perfil" component={Perfil}/>
          <RotaPrivada path="/Generos" component={Genero}/>
          <RotaPrivada path="/Filmes" component={Filmes}/>
          <ProtectedRoute path="/Catalogo" component={Catalogo}/>
     </Switch>
     </BrowserRouter>
     )
}
export default Routers;
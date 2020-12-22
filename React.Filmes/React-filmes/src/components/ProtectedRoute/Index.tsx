import React from 'react';
import { Route, Redirect } from 'react-router-dom';


interface RouteProps{
    component: any;
    path:any;
}


const ProtectedRoute: React.FC<RouteProps> = ({component: Component,path, ...rest}) => {
    const token = localStorage.getItem('token-filmes');
    var acesso = localStorage.getItem("TipoUsuario");
    return (
    <Route 
    render= {props => {
        if ((token != undefined || token != null) && acesso === 'Comum') {
          return <Component path={path}  {...rest} {...props} />
        } else {
            return <Redirect to={
                {
                  pathname: '/',
                  state: {
                    from: props.location
                  }
                }
              } />       
        }
      }
    } />
  )
}

export default ProtectedRoute;
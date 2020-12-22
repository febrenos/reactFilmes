import React,{useState} from 'react';
import './style.css';
import Button from '../../components/Button/Index';
import Footer from '../../components/Footer/Index';
import Header from '../../components/Header/Index';
import Input from '../../components/Input/Index';
import {useHistory} from 'react-router-dom';

function Login() {

  let history = useHistory();

  const [Email,setEmail] = useState('');
  const [Senha,setSenha] = useState('');

  const login = ()=>{
    const login ={
      email:Email,
      senha:Senha
    }
    const url = 'http://localhost:5000/api/Conta/login';
    fetch(url, {
            method: 'post',
            body: JSON.stringify(login),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        .then(Response => Response.json())
        .then(dados=>{

          if(dados.token != undefined){
            localStorage.setItem('token-filmes',dados.token)
            history.push('/');
          }else{
            alert("Senha ou email invalidos!!!");
          }

        })
        .catch(err => {
            console.error(err); //retornar um erro 
        });
  }

  return (
    <div>
        <Header description="Faça o login para acessar coletânea"/>

        <div className="centro">
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={event => {event.preventDefault()
                login()
                }}>
                <Input onChange={e => setEmail(e.target.value)} className="inputs" type="Text" name="email" label="Email" placeholder="Digite seu email"/>

                <Input onChange={e => setSenha(e.target.value)} className="inputs" type="password" name="senha" label="Senha" placeholder="Digite sua senha"/>
                
                <Button className="buttons" name="Login" value="Login" type="button"/>
                </form>
            </div>
        </div>

        <Footer/>
    </div>
  );
}

export default Login;

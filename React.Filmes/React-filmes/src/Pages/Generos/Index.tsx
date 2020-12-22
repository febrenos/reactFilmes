import React, { useEffect, useState } from 'react';
import refreshImg from '../../assets/imagens/refresh.png';
import trashImg from '../../assets/imagens/trash.png';
import './style.css';
import Footer from '../../components/Footer/Index';
import Header from '../../components/Header/Index';
import Input from '../../components/Input/Index';
import Button from '../../components/Button/Index';
import theater from '../../assets/imagens/theater.png';


function Genero() {

  const [genero, setGenero] = useState('');
  const [idGenero, setIdGenero] = useState(0);
  const[generos, setGeneros] = useState([]);
  
  useEffect(() =>{
    listar();
  },[]);

  const salvar = () =>{
    const form ={
      nome: genero
    };

    const method = (idGenero === 0 ? 'POST' : 'PUT');

    const url = (idGenero === 0 ? 'http://localhost:5000/api/Generos' : 'http://localhost:5000/api/Generos/'+ idGenero);

  fetch(url, {
          headers:{
            'Content-Type': 'application/json;charset=utf-8',
            authorization: 'bearer '+ localStorage.getItem('token-filmes')
          },
          method: method,
          body: JSON.stringify(form)
      })
      .then(() =>{
        console.log(form);
        console.log(url);
        console.log(method);
        setIdGenero(0);
        setGenero('');
        listar();
      })
      .catch(err => {
        console.error(err); //retornar um erro 
    })
  };

  const refresh = (id:any) =>{
    const url = 'http://localhost:5000/api/Generos/'+id;
    fetch(url, {
            headers:{
              authorization: 'bearer '+ localStorage.getItem('token-filmes')
            },
            method: 'GET'
        })
        .then(Response => Response.json())
      .then(dados=>{
        setIdGenero(dados.idGenero);
        setGenero(dados.nome);
        listar();
      })
      .catch(err => {
        console.error(err); //retornar um erro 
    })
  }

  const trash = (id:any) =>{
      const url = 'http://localhost:5000/api/Generos/'+id;
    fetch(url, {
            headers:{
              'Content-Type': 'application/json;charset=utf-8',
              authorization: 'bearer '+ localStorage.getItem('token-filmes')
            },
            method: 'DELETE'
        })
      .then(Response => Response.json())
      .then(dados=>{

        listar();
      })
      .catch(err => {
        console.error(err); //retornar um erro 
    })
  };

const listar = () =>{
  const url = 'http://localhost:5000/api/Generos';
  fetch(url, {
          headers:{
            authorization: 'bearer '+ localStorage.getItem('token-filmes')
          },
          method: 'GET',
      })
      .then(Response => Response.json())
      .then(dados=>{
        setGeneros(dados);
      })
      .catch(err => {
          console.error(err); //retornar um erro 
      });
};

  return (
    <div>
      <main>

        <Header description="Cadastre os gêneros dos filmes"/>

        <div className="teatro">
          <div className="teat">
            <h1>Gêneros</h1>
            <img src={theater}/>
          </div>
        </div>

        <form className="forms" onSubmit={event => {
          event.preventDefault();
          salvar();
        }}>

          <div>
          <table className="tabela">
            <h3>Listar Gêneros</h3>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              generos.map((item: any) =>{
                return(
                  <tr key={item.idGenero}>
                    <td>{item.idGenero}</td>
                    <td>{item.nome}</td>
                    <td className="icon">
                    <img src={refreshImg} alt="" onClick={() =>refresh(item.idGenero)}/>  
                    <img src={trashImg} alt="" onClick={() =>trash(item.idGenero)}/>  
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
         <Input onChange={e => setGenero(e.target.value)} className="inputs" name="genero" type="text" label="Cadastrar gênero" placeholder="Digite seu gênero"/>
          </div>
          <div>
              <Button className="buttons" name="Salvar" value="Salvar" type="button"/>
          </div>
        </form>
        <Footer/>
        </main>
    </div>
  );
}

export default Genero;

import React, { useEffect, useState } from 'react';
import './style.css';
import Footer from '../../components/Footer/Index';
import Header from '../../components/Header/Index';
import cinema from '../../assets/imagens/cinema.png';
import Input from '../../components/Input/Index';
import Button from '../../components/Button/Index';
import refreshImg from '../../assets/imagens/refresh.png';
import trashImg from '../../assets/imagens/trash.png';
import Select from '../../components/Select/Index';

function Filmes() {

    const [filme, setFilme] = useState('');
    const [idFilme, setIdFilme] = useState(0);
    const [genero, setGenero] = useState('');
    const[filmes, setFilmes] = useState([]);
    const[generos, setGeneros] = useState([]);

  
    useEffect(() =>{
      listar();
      listarGeneros();
    },[]);

    const listar = () =>{
      const url = 'http://localhost:5000/api/Filmes';
      fetch(url, {
              headers:{
                authorization: 'bearer '+ localStorage.getItem('token-filmes')
              },
              method: 'GET',
          })
          .then(Response => Response.json())
          .then(dados=>{
            console.log(dados);
            console.log(dados.titulo)
            setFilmes(dados);
          })
          .catch(err => {
              console.error(err); //retornar um erro 
          });
    };

    const salvar = () =>{
      const form ={
        Titulo: filme,
        IdGenero: genero
      };
  
      const method = (idFilme === 0 ? 'POST' : 'PUT');
  
      const url = (idFilme === 0 ? 'http://localhost:5000/api/Filmes' : 'http://localhost:5000/api/Filmes/'+ idFilme);
  
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
          setIdFilme(0);
          setFilme('');
          listar();
          listarGeneros();
        })
        .catch(err => {
          console.error(err); //retornar um erro 
      })
    };


    const trash = (id:any) =>{
      const url = 'http://localhost:5000/api/Filmes/'+id;
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
    

    const listarGeneros = () =>{
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

    const refresh = (id:any) =>{
      const url = 'http://localhost:5000/api/Filmes/'+id;
      fetch(url, {
              headers:{
                authorization: 'bearer '+ localStorage.getItem('token-filmes')
              },
              method: 'GET'
          })
          .then(Response => Response.json())
        .then(dados=>{
          setIdFilme(dados.IdFilme);
          setFilme(dados.titulo);
          listar();
        })
        .catch(err => {
          console.error(err); //retornar um erro 
      })
    }
  
  return (
    <div className="filmes-div">
        <Header description="Cadastre os filmes de sua preferência"/>

         <div className="film">
          <div className="fil">
            <h1>Filmes</h1>
            <img src={cinema}/>
          </div>
        </div>

        <div className="rumo">

          <table className="tabe">
            <h3>Listar Filmes</h3>
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
               filmes.map((item: any) =>{
                 return(
                   <tr key={item.idFilme}>
                     <td>{item.idFilme}</td>
                     <td>{item.idGeneroNavigation.nome}</td>
                     <td>{item.titulo}</td>
                     <td className="icon">
                     <img src={refreshImg} onClick={() => refresh(item.idFilme)} />  
                     <img src={trashImg} onClick={() => trash(item.idFilme)}/>  
                     </td>
                   </tr>
                )
               })
            }
          </tbody>
        </table>
        </div>

      <form onSubmit={event =>{
         event.preventDefault();
         salvar();
         }}>

        <div className="cad-filmes">
         <Input className="inputs" onChange={e => setFilme(e.target.value)} name="genero" type="text" label="Cadastrar filmes" placeholder="Digite seu filme"/>
          <Select id="align-sele" className="selects" name="generos" onChange={e => setGenero(e.target.value)}>
         <option value="0" selected disabled hidden>Selecione</option> 
          {
            generos.map((item: any) => {
              return <option value={item.idGenero}>{item.nome}</option>
            })
          }                          
         </Select>
         
          <Button className="buttons" name="Salvar" value="Salvar" type="button"/>
        </div>     

      </form>
        
        <Footer/>
    </div>
  );
}

export default Filmes;

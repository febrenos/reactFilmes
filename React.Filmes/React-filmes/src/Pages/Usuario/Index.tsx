import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Index';
import Header from '../../components/Header/Index';
import './style.css';

function UserFilmes(){
    const[filmes, setFilmes] = useState([]);


useEffect(() =>{
    listar();
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
          setFilmes(dados);
        })
        .catch(err => {
            console.error(err); //retornar um erro 
        });
  };

    return(
        <div>
            <Header description=""/>

            <div className="rumo">

          <table className="tabel">
            <h3>Listar Filmes</h3>
          <thead>
            <tr>
              <th>Nome do filme</th>
              <th>Gênero</th>
            </tr>
          </thead>
          <tbody>
            {
               filmes.map((item: any) =>{
                 return(
                   <tr key={item.idFilme}>
                     <td>{item.titulo}</td>
                     <td>{item.idGeneroNavigation.nome}</td>
                   </tr>
                )
               })
            }
          </tbody>
        </table>
        </div>
            <Footer/>
        </div>
    )
}

export default UserFilmes;
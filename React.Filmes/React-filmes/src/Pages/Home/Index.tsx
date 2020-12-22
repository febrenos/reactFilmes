import React from 'react';
import '../../assets/style/global.css';
import './style.css';
import cine from '../../assets/imagens/cinema.png';
import mascara from '../../assets/imagens/theater.png';
import Footer from '../../components/Footer/Index';
import Header from '../../components/Header/Index';

function Home() {
  return (
    <div>
      <Header description="Conheça nossa coletânea"/>
        <div className="centro">
          <div className="home">
                  <h1>Monte sua coletânea de filmes...</h1>

                  <div>
                      <h2>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor</h2>
                      <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br/>
                      exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit <br/>
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit. </p>
                  </div>

                  <div className="container-cine">
                    <div>
                      <img className="imagem" src={cine} alt="Fita de cinema com cor preta"/>
                      <h3>Filmes</h3>
                      <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do <br/>
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br/>
                        enim ad minim veniam, quis nostrud exercitation ullamco <br/>
                         laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea <br/>
                          commodo consequat. </p>
                    </div>

                    <div>
                    <img className="imagem" src={mascara} alt="Fita de cinema com cor preta"/>
                    <h3>Categoria</h3>
                    <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do <br/>
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br/>
                        enim ad minim veniam, quis nostrud exercitation ullamco <br/>
                         laboris nisi ut eiusmod tempor incididunt ut labore  aliquip ex ea <br/>
                          commodo consequat. </p>
                    </div>
                  </div>
          </div>
        </div>
     <Footer/>
    </div>
  );
}

export default Home;

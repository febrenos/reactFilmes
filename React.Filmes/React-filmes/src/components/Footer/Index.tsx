import React from 'react';
import './style.css';
import '../../assets/style/global.css';
import logo from '../../assets/imagens/logonegativo.png';

function Footer() {
  return (
    <div className="principal">
      <div className="footer">
          <footer>
            <div className="blocos">
                <div>
                    <img src={logo} alt="logotipo preto do filmes collections"/>
                </div>
                
                <div className="faixa"></div>

                <div className="paragrafos">
                    <p>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</p>
                    <p>Call us now toll free: (800)2345-6789</p>
                    <p>Customer support: support@demolink.org</p>
                    <p> Skype: sample-username</p>
                </div>
              </div>
          </footer>
      </div>
    </div>
  );
}

export default Footer;

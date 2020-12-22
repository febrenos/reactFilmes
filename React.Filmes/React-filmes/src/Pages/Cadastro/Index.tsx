import React from 'react';
import './style.css';
import Button from '../../components/Button/Index';
import Footer from '../../components/Footer/Index';
import Header from '../../components/Header/Index';
import Input from '../../components/Input/Index';
import Select from '../../components/Select/Index';

function Cadastro() {
  return (
    <div>
        <Header description="Faça o Cadastro para o acesso"/>
        <div className="centro">
          <div className="cadastro">
              <h1>Cadastro</h1>
              <Input className="inputs" type="Text" name="nome" label="Nome" placeholder="Digite seu nome"/>
                <Input className="inputs"  type="Text" name="email" label="Email" placeholder="Digite seu email"/>

              <div>
                <label htmlFor="Permissão">Permissão</label>
                <Select className="selects"  name="Permissão">
                <option value="21" selected disabled hidden>Selecione</option>                  
                <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </Select>
              </div>

                <Input className="inputs"  type="password" name="senha" label="Senha" placeholder="Digite sua senha"/>
                <Button className="buttons" name="Cadastrar" type="button"/> 
          </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Cadastro;

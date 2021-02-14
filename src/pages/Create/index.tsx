import React, { FormEvent, useState } from 'react';
import { setTokenSourceMapRange } from 'typescript';
import Navbar from '../../components/Navbar/';
import db from '../../services/api';

import { Container } from './styles';

const Create: React.FC = () => { /*Estados para armazenar o valor*/
  const [nome, setNome] = useState(''); /*desistriturando */
  const [nicksteam, setNicksteam] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [urlperfil, setUrlperfil] = useState('');

  function clearForm() {
    setNome('')
    setNicksteam('')
    setEmail('')
    setCellphone('')
    setUrlperfil('')
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault() /*Não deixa a pagina recarregar*/

    try{
      await db.post('/player', {  /*Cadastrar no banco*/
        nome: nome,
        nicksteam: nicksteam,
        email: email,
        cellphone: cellphone,
        urlperfil: urlperfil,
      });
      
      alert('Usuário cadastrado com sucesso!');

      clearForm();

    }catch(error) {
      alert('Erro no cadastro!');
    }
    
  }

  return (
    <>
      <Navbar>
      </Navbar>

      <Container>
        <div>
          <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => {setNome(e.target.value) }}
            required
            autoFocus
          />

          <label htmlFor="nicksteam">Nick da steam</label>
          <input
            type="text"
            id="nicksteam"
            value={nicksteam}
            onChange={(e) => {setNicksteam(e.target.value) }}
            required
          />

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {setEmail(e.target.value) }}
            required
          />

          <label htmlFor="cellphone">Cell Phone</label>
          <input
            type="text"
            id="cellphone"
            value={cellphone}
            onChange={(e) => {setCellphone(e.target.value) }}
          />

          <label htmlFor="urlperfil">URL perfil</label>
          <input
            type="text"
            id="urlperfil"
            value={urlperfil}
            onChange={(e) => {setUrlperfil(e.target.value) }}
            required
          />

          <button>Salvar</button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Create;
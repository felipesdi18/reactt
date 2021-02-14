import React from 'react';
import {Link} from 'react-router-dom'

import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Link to="/">Criar</Link>
      <Link to="/list">Listar</Link>
    </Container>
  );
};

export default Navbar;
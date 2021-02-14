import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/';
import { SiPlex } from 'react-icons/si';
import db from '../../services/api';

import { Container, PlayerPanel } from './styles';

interface IPlayer {
  nome: string
  nicksteam: string
  email: string
  cellphone: string
  urlperfil: string
  id: number
}

const List: React.FC = () => {
  const [players, setPlayers] = useState<IPlayer[]>([])

  useEffect(() => {
    db.get('/player').then(response => {
      setPlayers(response.data);
    });
  }, []);

  return (
    <>
      <Navbar>
      </Navbar>

      <Container>
        <main>

          {players && players.map(player => (

            <PlayerPanel>
              <img src={player.urlperfil} alt={`${player.nicksteam}'s player`} />

              <div>
                <h2>{player.nome}</h2>
                <span>{player.nicksteam}</span>
                <span>{player.email}</span>

              </div>
              <SiPlex size={30} />
            </PlayerPanel>
          ))}

        </main>
      </Container>
    </>
  );
};

export default List;
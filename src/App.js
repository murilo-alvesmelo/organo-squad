
import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';
import Times from './componentes/Times';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Ataque',
      corPrimaria:  '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Defesa',
      corPrimaria:  '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
  ]

  const[jogadores, setJogadores] = useState([])

  const isNovoJogador =(jogador)=>{
    setJogadores([...jogadores, jogador])
  }
  return (
    <div>
      <Banner/>
      <Form isJogadores={jogador => isNovoJogador(jogador)} times={times.map(i=> i.nome)}/>
      {times.map(time => <Times 
        key={time.nome} 
        nomeTime={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        jogadores={jogadores.filter(j => j.time === time.nome)} 
      />)}
      <Rodape/>
    </div>
  );
}

export default App;

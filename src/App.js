
import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';
import Times from './componentes/Times';

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
    console.log(jogadores)
  }

  return (
    <div>
      <Banner/>
      <Form isJogadores={jogador => isNovoJogador(jogador)}/>
      {times.map(time => <Times key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}
    </div>
  );
}

export default App;

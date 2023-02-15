
import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';

function App() {

  const[jogadores, setJogadores] = useState([])

  const isNovoJogador =(jogador)=>{
    setJogadores([...jogadores, jogador])
    console.log(jogadores)
  }

  return (
    <div>
      <Banner/>
      <Form isJogadores={jogador => isNovoJogador(jogador)}/>
    </div>
  );
}

export default App;


import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';
import Times from './componentes/Times';
import Rodape from './componentes/Rodape';


function App() {

  const[jogadores, setJogadores] = useState([])
  const [times, setTimes] = useState([
    {
      nome: 'Ataque',
      cor: '#FDE7E8'
    },
    {
      nome: 'Defesa',
      cor: '#E8F8FF'
    },
  ])

  const isNovoJogador =(jogador)=>{
    setJogadores([...jogadores, jogador])
  }

  function DeletarJogador(index){
    alert(index)
  }

  function mudarCorTime(cor, nome){
    setTimes(times.map(time => {
      if(time.nome === nome){
        time.cor = cor
      }
      return time
    }))
  }

  return (
    <div>
      <Banner/>
      <Form isJogadores={jogador => isNovoJogador(jogador)} times={times.map(i=> i.nome)}/>
      {times.map(time => <Times 
        key={time.nome} 
        nomeTime={time.nome} 
        cor={time.cor}
        jogadores={jogadores.filter(j => j.time === time.nome)} 
        isDeletar={DeletarJogador}
        mudarCorTime={mudarCorTime}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;


import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';
import Times from './componentes/Times';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const[jogadores, setJogadores] = useState([])
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Ataque',
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      nome: 'Defesa',
      cor: '#E8F8FF'
    },
  ])

  const isNovoJogador =(jogador)=>{
    setJogadores([...jogadores, jogador])
  }

  function DeletarJogador(id){
    console.log(id)
  }

  function mudarCorTime(cor, id){
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor
      }
      return time
    }))
  }

  function cadastrarTime(novoTime){
    setTimes([...times, {id: uuidv4(), ...novoTime}])
  }

  return (
    <div>
      <Banner/>
      <Form 
        cadastrarTime={cadastrarTime}
        isJogadores={jogador => isNovoJogador(jogador)} 
        times={times.map(i=> i.nome)}

      />
      {times.map(time => <Times 
        key={time.id} 
        timeId={time.id}
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

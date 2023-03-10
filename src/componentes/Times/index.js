import Jogador from '../Jogador'
import './Times.css'
import hexToRgba from 'hex-to-rgba';

export default function Times(props){
    return(
    (props.jogadores.length > 0) ? 
    <section className="time" style={{ backgroundColor:  hexToRgba(props.cor, '0.6')}}>
        <input type='color' className='input-cor' value={props.cor} onChange={e => props.mudarCorTime(e.target.value, props.timeId)}/>
        <h3 style={{ borderBottomColor: props.cor }}>{props.nomeTime}</h3>
        <div className='jogadores'>
            {props.jogadores.map((j, i)=> {
                return(
                    <Jogador 
                        key={i} 
                        nome={j.nome} 
                        cargo={j.cargo} 
                        imagem={j.image}
                        corDeFundo={hexToRgba(props.cor, '1')}    
                        isDeletar={() => props.isDeletar(props.timeId)}
                    />
                )
            })}
        </div>
    </section>
    : ""
    )
}
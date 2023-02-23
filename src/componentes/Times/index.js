import Jogador from '../Jogador'
import './Times.css'

export default function Times(props){
    return(
    (props.jogadores.length > 0) ? 
    <section className="time" style={{ backgroundColor: props.corSecundaria }}>
        <h3 style={{ borderBottomColor: props.corPrimaria }}>{props.nomeTime}</h3>
        <div className='jogadores'>
            {props.jogadores.map(j=> 
                <Jogador 
                    key={j.nome} 
                    nome={j.nome} 
                    cargo={j.cargo} 
                    imagem={j.imagem}
                    corPrimaria={props.corPrimaria}
                />
            )}
        </div>
    </section>
    : ""
    )
}
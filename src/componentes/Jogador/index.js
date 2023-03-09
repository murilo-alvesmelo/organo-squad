import './Jogador.css'
import { AiOutlineCloseCircle } from 'react-icons/ai' 

export default function Jogador(props){
    return(
        <div className='jogador'>
            <AiOutlineCloseCircle className='deletar' onClick={props.isDeletar} size={25}/>
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}
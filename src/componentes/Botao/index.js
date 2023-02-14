import './Botao.css'

export default function Botao(props){
    return(
        <button className='botao'>
            {props.texto}
        </button>
    )
}
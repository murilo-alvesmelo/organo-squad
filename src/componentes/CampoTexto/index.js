import './CampoTexto.css'

export default function CampoTexto(props){
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={(e) => props.isAlterado(e.target.value)} value={props.valor} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}
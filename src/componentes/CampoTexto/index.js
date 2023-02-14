import './CampoTexto.css'

export default function CampoTexto(props){
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}
import './Campo.css'

export default function Campo(props){
    return(
        <div className="campo">
            <label>{props.label}</label>
            <input 
                onChange={(e) => props.isAlterado(e.target.value)} 
                value={props.valor} 
                required={props.obrigatorio} 
                placeholder={props.placeholder} 
                type={props.type}
            />
        </div>
    )
}
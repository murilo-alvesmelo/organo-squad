import './ListaSuspensa.css'

export default function ListaSuspensa(props){
    const squad = [
        'Ataque',
        'Defesa'
    ]
    
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(i => {
                    return <option key={i}>{i}</option>
                })}
            </select>
        </div>
    )
}
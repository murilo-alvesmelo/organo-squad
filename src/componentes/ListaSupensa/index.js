import './ListaSuspensa.css'

export default function ListaSuspensa(props){

    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select
                placeholder='Escolha'
                value={props.valor}
                required={props.obrigatorio}
                onChange={e => props.isAlterado(e.target.value)}
            >
                <option value='' disabled selected>Escolha</option>
                {props.itens.map(i => {
                    return <option key={i}>{i}</option>
                })}
            </select>
        </div>
    )
}
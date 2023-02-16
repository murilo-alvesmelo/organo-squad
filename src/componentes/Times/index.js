import './Times.css'

export default function Times(props){
    return(
        <section className="time" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderBottomColor: props.corPrimaria }}>{props.nome}</h3>
        </section>
    )
}
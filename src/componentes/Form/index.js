import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSupensa";
import './Form.css'

export default function Form(){

    const squad = [
        'Ataque',
        'Defesa'
    ]

    return(
        <section className="form">
            <form>
            <h2>Preencha os dados para criar o card do jogador.</h2>
            <CampoTexto label="Nome" placeholder="Digite seu nome"/>
            <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
            <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem"/>
            <ListaSuspensa label="Time" itens={squad}/>
            <Botao texto="Criar card"/>
            </form>
        </section>
    )
}
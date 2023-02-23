import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSupensa";
import './Form.css'

export default function Form(props){

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const handleSubmit = async(event) =>{
        event.preventDefault()
        await props.isJogadores({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    } 

    return(
        <section className="form">
            <form onSubmit={handleSubmit}>
            <h2>Preencha os dados para criar o card do jogador.</h2>
            <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome" 
                isAlterado={(valor) => setNome(valor)} 
                valor={nome}
            />
            <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu cargo"
                isAlterado={(valor) => setCargo(valor)}
                valor={cargo}
            />
            <CampoTexto 
                obrigatorio={true} 
                label="Imagem" 
                placeholder="Informe o endereço da imagem"
                isAlterado={(valor) => setImagem(valor)}
                valor={imagem}
            />
            <ListaSuspensa 
                obrigatorio={true} 
                label="Time" 
                itens={props.times}
                valor={time}
                isAlterado={(valor) => setTime(valor)}
            />
            <Botao texto="Criar card"/>
            </form>
        </section>
    )
}
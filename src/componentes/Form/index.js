import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSupensa";
import './Form.css'

export default function Form(props){

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [time, setTime] = useState('')
    const [image, setImage] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')


    const handleSubmit = async(event) =>{
        event.preventDefault()
        await props.isJogadores({
            nome,
            cargo,
            time,
            image
        })
        setNome('')
        setCargo('')
        setTime('')
        setImage('')
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
                    isAlterado={(valor) => setImage(valor)}
                    valor={image}
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
            <form onSubmit={(e) => {
                e.preventDefault()
                props.cadastrarTime({nome: nomeTime, cor: corTime})
                setNomeTime('')
                setCorTime('')
            }}>
            <h2>Criar um novo time</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome do time" 
                    isAlterado={(valor) => setNomeTime(valor)} 
                    valor={nomeTime}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cor" 
                    placeholder="Digite a cor do time"
                    isAlterado={(valor) => setCorTime(valor)}
                    valor={corTime}
                />

                <Botao texto="Criar card"/>
            </form>
        </section>
    )
}
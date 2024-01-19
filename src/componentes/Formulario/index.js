import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props)=> {

 
  const [nome, setNome] = useState ('')
  const [estilo, setEstilo] = useState ('')
  const [imagem, setImagem] = useState ('')
  const [rank, setRank] = useState ('')


  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      estilo,
      imagem,
      rank
    })
    setNome('')
    setEstilo('')
    setImagem('')
    setRank('')
  }
  
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Anime</h2>
      <CampoTexto 
      obrigatorio={true} 
      label="Nome" 
      placeholder="Digite o nome do Anime" 
      valor={nome} 
      aoAlterado={valor => setNome(valor)}
      />
      <CampoTexto 
      obrigatorio={true} 
      label="Estilo" 
      placeholder="Digite o estilo"
      valor={estilo} 
      aoAlterado={valor => setEstilo(valor)}
      />
      <CampoTexto 
      label="Imagem" 
      placeholder="Informe a url da imagem"
      valor={imagem} 
      aoAlterado={valor => setImagem(valor)}
      />
      <ListaSuspensa 
      obrigatorio={true} 
      label="Ranks" 
      itens={props.ranks}
      valor={rank}
      aoAlterado={valor => setRank(valor)}
      />
      <Botao texto="Criar Card"/>
      </form>
    </section>
  )
}

export default Formulario
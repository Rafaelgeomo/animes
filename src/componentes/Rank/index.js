import Colaborador from '../Colaborador'
import './Rank.css'

const Rank = (props) => {
  const css = {backgroundColor:props.corSecundaria}

  return (

    props.colaboradores.length > 0 ? <section className='rank' style={css}> 
      <h3 style={{borderColor: props.corPrimaria}} > {props.nome}</h3>
      <div className='colaboradores'>
        {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome}  nome={colaborador.nome} estilo={colaborador.estilo} imagem={colaborador.imagem}/>)}
      </div>   
    </section>
    : ''
  )
}

export default Rank
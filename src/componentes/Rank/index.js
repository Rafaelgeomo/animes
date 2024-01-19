import Anime from '../Anime'
import './Rank.css'

const Rank = (props) => {
  const css = {backgroundColor:props.corSecundaria}

  return (

    props.colaboradores.length > 0 ? <section className='rank' style={css}> 
      <h3 style={{borderColor: props.corPrimaria}} > {props.nome}</h3>
      <div className='animes'>
        {props.colaboradores.map(anime => <Anime corDeFundo={props.corPrimaria} key={anime.nome}  nome={anime.nome} genero={anime.genero} imagem={anime.imagem}/>)}
      </div>   
    </section>
    : ''
  )
}

export default Rank
import {
  AiFillCloseCircle,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";

import "./Anime.css";

const Anime = ({ anime, corDeFundo, aoDeletar, aoFavoritar }) => {
  function favoritar() {
    aoFavoritar(anime.id);
  }

  const propsFavorito = {
    size: 25,
    onClick: favoritar,
  };

  return (
    <div className="anime">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(anime.id)}
      />
      <div
        className="cabecalho"
        style={{ backgroundColor: corDeFundo }}
      >
        <img src={anime.imagem} alt={anime.nome} />
      </div>
      <div className="rodape">
        <h4>{anime.nome}</h4>
        <h5>{anime.genero}</h5>
        <div className="favoritar">
          {anime.favorito ? (
            <AiFillHeart {...propsFavorito} color="#ff0000" />
          ) : (
            <AiOutlineHeart {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Anime;

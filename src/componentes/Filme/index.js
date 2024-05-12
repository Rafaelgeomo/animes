import {
  AiFillCloseCircle,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";

import "./Filme.css";

const Filme = ({ filme, corDeFundo, aoDeletar, aoFavoritar }) => {
  function favoritar() {
    aoFavoritar(filme.id);
  }

  const propsFavorito = {
    size: 25,
    onClick: favoritar,
  };

  return (
    <div className="filme">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(filme.id)}
      />
      <div
        className="cabecalho"
        style={{ backgroundColor: corDeFundo }}
      >
        <img src={filme.imagem} alt={filme.nome} />
      </div>
      <div className="rodape">
        <h4>{filme.nome}</h4>
        <h5>{filme.categoria}</h5>
        <h5>{filme.genero}</h5>
        <div className="favoritar">
          {filme.favorito ? (
            <AiFillHeart {...propsFavorito} color="#ff0000" />
          ) : (
            <AiOutlineHeart {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Filme;

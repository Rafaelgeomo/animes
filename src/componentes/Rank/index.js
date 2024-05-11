import Anime from "../Anime";
import "./Rank.css";
import hexToRgba from "hex-to-rgba";

const Rank = ({ rank, animes, aoDeletar, mudarCor, aoFavoritar }) => {
  return (
    animes.length > 0 && (
      <section
        className="rank"
        style={{
          backgroundImage: "url(/imagens/fundo.png)",
          backgroundColor: hexToRgba(rank.cor, "0.6"),
        }}
      >
        <input
          onChange={(evento) =>
            mudarCor(evento.target.value, rank.id)
          }
          value={rank.cor}
          type="color"
          className="input-cor"
        />
        <h3 style={{ borderColor: rank.cor }}>{rank.nome}</h3>
        <div className="animes">
          {animes.map((anime, indice) => {
            return (
              <Anime
                key={indice}
                anime={anime}
                corDeFundo={rank.cor}
                aoDeletar={aoDeletar}
                aoFavoritar={aoFavoritar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Rank;

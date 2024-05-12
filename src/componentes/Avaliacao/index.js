import Filme from "../Filme";
import "./Avaliacao.css";
import hexToRgba from "hex-to-rgba";

const Avaliacao = ({
  avaliacao,
  filmes,
  aoDeletar,
  mudarCor,
  aoFavoritar,
}) => {
  return (
    filmes.length > 0 && (
      <section
        className="avaliacao"
        style={{
          backgroundImage: "url(/imagens/fundo.png)",
          backgroundColor: hexToRgba(avaliacao.cor, "0.6"),
        }}
      >
        <input
          onChange={(evento) =>
            mudarCor(evento.target.value, avaliacao.id)
          }
          value={avaliacao.cor}
          type="color"
          className="input-cor"
        />
        <h3 style={{ borderColor: avaliacao.cor }}>
          {avaliacao.nome}
        </h3>
        <div className="filmes">
          {filmes.map((filme, indice) => {
            return (
              <Filme
                key={indice}
                filme={filme}
                corDeFundo={avaliacao.cor}
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

export default Avaliacao;

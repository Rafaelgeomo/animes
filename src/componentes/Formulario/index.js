import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = ({ aoCadastrar, ranks, cadastrarRank }) => {
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [imagem, setImagem] = useState("");
  const [rank, setRank] = useState("");
  const [nomeRank, setNomeRank] = useState("");
  const [corRank, setCorRank] = useState("");

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    aoCadastrar({
      nome,
      genero,
      imagem,
      rank,
    });
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSubmeter}>
        <h2>Preencha os dados para criar o card do Anime</h2>
        <Campo
          obrigatorio={true}
          label="Anime"
          placeholder="Digite o anime"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Genero"
          placeholder="Digite o gênero"
          valor={genero}
          aoAlterado={(valor) => setGenero(valor)}
        />
        <Campo
          label="Imagem"
          placeholder="Informe a url da imagem"
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Ranks"
          items={ranks}
          valor={rank}
          aoAlterado={(valor) => setRank(valor)}
        />
        <Botao texto="Criar Card" />
      </form>
      <form
        className="formulario"
        onSubmit={(evento) => {
          evento.preventDefault();
          cadastrarRank({ nome: nomeRank, cor: corRank }); // sempre quando está dentro de {} quer dizer q é um objeto
        }}
      >
        <h2>Preencha os dados para criar um novo rank.</h2>
        <Campo
          obrigatorio // so colando dessa forma ja entende que é igual a true
          label="Nome"
          placeholder="Digite o nome do Rank"
          valor={nomeRank}
          aoAlterado={(valor) => setNomeRank(valor)}
        />
        <Campo
          obrigatorio
          type="color"
          label="Cor"
          placeholder="Digite a cor do rank "
          valor={corRank}
          aoAlterado={(valor) => setCorRank(valor)}
        />
        <Botao texto="Criar um novo rank" />
      </form>
    </section>
  );
};

export default Formulario;

import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Avaliacao from "./componentes/Avaliacao";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [avaliacoes, setAvaliacoes] = useState(() => {
    const avaliacoesSalvas = localStorage.getItem("avaliacoes");
    return avaliacoesSalvas
      ? JSON.parse(avaliacoesSalvas)
      : [
          {
            id: uuidv4(),
            nome: "Gostei",
            cor: "#57C278",
          },
          {
            id: uuidv4(),
            nome: "Fraco",
            cor: "#82CFFA",
          },
          {
            id: uuidv4(),
            nome: "Colocar na lista",
            cor: "#A6D157",
          },
          {
            id: uuidv4(),
            nome: "Assistir novamente",
            cor: "#E06B69",
          },
          {
            id: uuidv4(),
            nome: "Inesquecível",
            cor: "#DB6EBF",
          },
          {
            id: uuidv4(),
            nome: "Vou dar uma chance",
            cor: "#FFBA05",
          },
        ];
  });

  const [filmes, setFilmes] = useState(() => {
    const filmesSalvos = localStorage.getItem("filmes");
    return filmesSalvos ? JSON.parse(filmesSalvos) : [];
  });

  function aoDeletarFilme(id) {
    const novosFilmes = filmes.filter((filme) => filme.id !== id);
    setFilmes(novosFilmes);
    localStorage.setItem("filmes", JSON.stringify(novosFilmes));
  }

  function mudarCorDaAvaliacao(cor, id) {
    const novasAvaliacoes = avaliacoes.map((avaliacao) => {
      if (avaliacao.id === id) {
        return { ...avaliacao, cor: cor };
      }
      return avaliacao;
    });
    setAvaliacoes(novasAvaliacoes);
    localStorage.setItem(
      "avaliacoes",
      JSON.stringify(novasAvaliacoes)
    );
  }

  function cadastrarAvaliacao(novaAvaliacao) {
    setAvaliacoes([
      ...avaliacoes,
      { ...novaAvaliacao, id: uuidv4() },
    ]);
  }

  const aoCadastrar = (novoFilme) => {
    const novosFilmes = [...filmes, novoFilme];
    setFilmes(novosFilmes);
    localStorage.setItem("filmes", JSON.stringify(novosFilmes));
  };

  function resolverFavorito(id) {
    setFilmes(
      filmes.map((filme) => {
        if (filme.id === id) filme.favorito = !filme.favorito;
        return filme;
      })
    );
  }

  return (
    <div>
      <Banner />
      <Formulario
        cadastrarAvaliacao={cadastrarAvaliacao}
        avaliacoes={avaliacoes.map((avaliacao) => avaliacao.nome)}
        aoCadastrar={aoCadastrar}
      />
      <section className="avaliacoes">
        <h1>Filmes / Séries / Animações </h1>
        {avaliacoes.map((avaliacao, indice) => (
          <Avaliacao
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorDaAvaliacao}
            key={indice}
            avaliacao={avaliacao}
            filmes={filmes.filter(
              (filme) => filme.avaliacao === avaliacao.nome
            )}
            aoDeletar={aoDeletarFilme}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;

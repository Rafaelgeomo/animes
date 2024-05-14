// Importa o hook useState do React
import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Avaliacao from "./componentes/Avaliacao";
// Importa a função uuidv4 da biblioteca uuid
import { v4 as uuidv4 } from "uuid";

function App() {
  // Define o estado das avaliações com base nos dados salvos no localStorage ou valores padrão
  const [avaliacoes, setAvaliacoes] = useState(() => {
    const avaliacoesSalvas = localStorage.getItem("avaliacoes");
    return avaliacoesSalvas
      ? JSON.parse(avaliacoesSalvas)
      : [
          {
            id: uuidv4(),
            nome: "Gostei",
            cor: "",
          },
          {
            id: uuidv4(),
            nome: "Fraco",
            cor: "",
          },
          {
            id: uuidv4(),
            nome: "Colocar na lista",
            cor: "",
          },
          {
            id: uuidv4(),
            nome: "Assistir novamente",
            cor: "",
          },
          {
            id: uuidv4(),
            nome: "Inesquecível",
            cor: "",
          },
          {
            id: uuidv4(),
            nome: "Vou dar uma chance",
            cor: "",
          },
        ];
  });

  const [termoDePesquisa, setTermoDePesquisa] = useState("");

  const handlePesquisa = (termo) => {
    setTermoDePesquisa(termo);
  };

  // Define o estado dos filmes com base nos dados salvos no localStorage ou um array vazio
  const [filmes, setFilmes] = useState(() => {
    const filmesSalvos = localStorage.getItem("filmes");
    return filmesSalvos ? JSON.parse(filmesSalvos) : [];
  });

  // Filtrar filmes com base no termo de pesquisa
  const filmesFiltrados = filmes.filter((filme) => {
    const termoLowerCase = termoDePesquisa.toLowerCase();
    return (
      filme.nome.toLowerCase().includes(termoLowerCase) ||
      filme.categoria.toLowerCase().includes(termoLowerCase) ||
      filme.genero.toLowerCase().includes(termoLowerCase)
    );
  });

  // Função para deletar um filme da lista
  function aoDeletarFilme(id) {
    const novosFilmes = filmes.filter((filme) => filme.id !== id);
    setFilmes(novosFilmes);
    localStorage.setItem("filmes", JSON.stringify(novosFilmes));
  }

  // Função para mudar a cor de uma avaliação
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

  // Função chamada ao cadastrar um novo filme
  const aoCadastrar = (novoFilme) => {
    const novosFilmes = [...filmes, novoFilme];
    setFilmes(novosFilmes);
    localStorage.setItem("filmes", JSON.stringify(novosFilmes));
  };

  // Função para marcar/desmarcar um filme como favorito
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
        avaliacoes={avaliacoes.map((avaliacao) => avaliacao.nome)}
        aoCadastrar={aoCadastrar}
        onPesquisa={handlePesquisa} // Passar a função para o Formulario
      />
      <section className="avaliacoes">
        <h1>Filmes / Séries / Animações </h1>
        {avaliacoes.map((avaliacao, indice) => (
          <Avaliacao
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorDaAvaliacao}
            key={indice}
            avaliacao={avaliacao}
            // Passar os filmes filtrados para o componente Avaliacao
            filmes={filmesFiltrados.filter(
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

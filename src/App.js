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

// const inicial = [
//   {
//     id: uuidv4(),
//     favorito: false,
//     nome: "Naruto",
//     genero: "Aventura",
//     categoria: "Animação",
//     imagem:
//       "https://f.i.uol.com.br/fotografia/2021/02/18/1613671086602eaaae9c32f_1613671086_3x2_md.jpg",
//     avaliacao: avaliacoes[0].nome,
//   },
//   {
//     id: uuidv4(),
//     favorito: false,
//     nome: "Fullmetal Alchemist",
//     genero: "Ação",
//     categoria: "Animação",
//     imagem:
//       "https://f.i.uol.com.br/fotografia/2021/02/18/1613671086602eaaae9c32f_1613671086_3x2_md.jpg",
//     avaliacao: avaliacoes[0].nome,
//   },
//   {
//     id: uuidv4(),
//     favorito: false,
//     nome: "Hunter x Hunter",
//     genero: "Ação",
//     categoria: "Animação",
//     imagem:
//       "	https://wallpapercrafter.com/desktop1/664454-Anime-Hunter-x-Hunter-Gon-Freecss-1080P.jpg",
//     avaliacao: avaliacoes[0].nome,
//   },
//   {
//     id: uuidv4(),
//     favorito: false,
//     nome: "Dragon Ball Z",
//     genero: "Artes Marciais",
//     categoria: "Animação",
//     imagem:
//       "https://sm.ign.com/ign_br/news/n/new-dragon/new-dragon-ball-series-dragon-ball-daima-confirmed-for-fall_t343.jpg",
//     avaliacao: avaliacoes[0].nome,
//   },
//   {
//     id: uuidv4(),
//     favorito: false,
//     nome: "Naruto",
//     genero: "Aventura",
//     categoria: "Animação",
//     imagem:
//       "https://f.i.uol.com.br/fotografia/2021/02/18/1613671086602eaaae9c32f_1613671086_3x2_md.jpg",
//     avaliacao: avaliacoes[1].nome,
//   },
//   {
//     id: uuidv4(),
//     favorito: false,
//     nome: "Fullmetal Alchemist",
//     genero: "Ação",
//     categoria: "Animação",
//     imagem:
//       "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2022/06/legiao_QlSkH2d9AxIR.jpg",
//     avaliacao: avaliacoes[1].nome,
//   },
//   {
//     id: uuidv4(),
//     favorito: false,
//     nome: "Hunter x Hunter",
//     genero: "Ação",
//     categoria: "Animação",
//     imagem:
//       "	https://wallpapercrafter.com/desktop1/664454-Anime-Hunter-x-Hunter-Gon-Freecss-1080P.jpg",
//     avaliacao: avaliacoes[1].nome,
//   },
//   {
//     id: uuidv4(),
//     favorito: false,
//     nome: "Dragon Ball Z",
//     genero: "Artes Marciais",
//     categoria: "Animação",
//     imagem:
//       "https://sm.ign.com/ign_br/news/n/new-dragon/new-dragon-ball-series-dragon-ball-daima-confirmed-for-fall_t343.jpg",
//     avaliacao: avaliacoes[1].nome,
//   },
// ];

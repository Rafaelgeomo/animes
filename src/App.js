import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Rank from "./componentes/Rank";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [ranks, setRanks] = useState([
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
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: "Naruto",
      genero: "Aventura",
      imagem:
        "https://f.i.uol.com.br/fotografia/2021/02/18/1613671086602eaaae9c32f_1613671086_3x2_md.jpg",
      rank: ranks[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Fullmetal Alchemist",
      genero: "Ação",
      imagem:
        "https://f.i.uol.com.br/fotografia/2021/02/18/1613671086602eaaae9c32f_1613671086_3x2_md.jpg",
      rank: ranks[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Hunter x Hunter",
      genero: "Ação",
      imagem:
        "	https://wallpapercrafter.com/desktop1/664454-Anime-Hunter-x-Hunter-Gon-Freecss-1080P.jpg",
      rank: ranks[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Dragon Ball Z",
      genero: "Artes Marciais",
      imagem:
        "https://sm.ign.com/ign_br/news/n/new-dragon/new-dragon-ball-series-dragon-ball-daima-confirmed-for-fall_t343.jpg",
      rank: ranks[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Naruto",
      genero: "Aventura",
      imagem:
        "https://f.i.uol.com.br/fotografia/2021/02/18/1613671086602eaaae9c32f_1613671086_3x2_md.jpg",
      rank: ranks[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Fullmetal Alchemist",
      genero: "Ação",
      imagem:
        "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2022/06/legiao_QlSkH2d9AxIR.jpg",
      rank: ranks[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Hunter x Hunter",
      genero: "Ação",
      imagem:
        "	https://wallpapercrafter.com/desktop1/664454-Anime-Hunter-x-Hunter-Gon-Freecss-1080P.jpg",
      rank: ranks[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Dragon Ball Z",
      genero: "Artes Marciais",
      imagem:
        "https://sm.ign.com/ign_br/news/n/new-dragon/new-dragon-ball-series-dragon-ball-daima-confirmed-for-fall_t343.jpg",
      rank: ranks[1].nome,
    },
  ];

  const [animes, setAnimes] = useState(inicial);

  function aoDeletarAnime(id) {
    setAnimes(animes.filter((anime) => anime.id !== id));
  }

  function mudarCorDoRank(cor, id) {
    setRanks(
      ranks.map((rank) => {
        if (rank.id === id) {
          rank.cor = cor;
        }
        return rank;
      })
    );
  }

  function cadastrarRank(novoRank) {
    setRanks([...ranks, { ...novoRank, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setAnimes(
      animes.map((anime) => {
        if (anime.id === id) anime.favorito = !anime.favorito;
        return anime;
      })
    );
  }

  return (
    <div>
      <Banner />
      <Formulario
        cadastrarRank={cadastrarRank}
        ranks={ranks.map((rank) => rank.nome)}
        aoCadastrar={(anime) => setAnimes([...animes, anime])}
      />
      <section className="ranks">
        <h1>Meus Animes</h1>
        {ranks.map((rank, indice) => (
          <Rank
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorDoRank}
            key={indice}
            rank={rank}
            animes={animes.filter(
              (anime) => anime.rank === rank.nome
            )}
            aoDeletar={aoDeletarAnime}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;

import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({
  aoCadastrar,
  avaliacoes,
  onPesquisa,
  // cadastrarAvaliacao,
}) => {
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagem, setImagem] = useState("");
  const [avaliacao, setAvaliacao] = useState("");
  const [termoDePesquisa, setTermoDePesquisa] = useState(""); // Novo estado para o termo de pesquisa

  // const categorias = [
  //   {
  //     id: 0,
  //     nome: "Filmes",
  //   },
  //   {
  //     id: 1,
  //     nome: "Séries",
  //   },
  //   {
  //     id: 2,
  //     nome: "Animação",
  //     cor: "",
  //   },
  //   {
  //     id: 3,
  //     nome: "Documentário",
  //   },
  // ];

  const handlePesquisa = (e) => {
    if (onPesquisa) {
      setTermoDePesquisa(e.target.value); // Atualiza o estado do termo de pesquisa
      onPesquisa(e.target.value);
    }
  };

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    aoCadastrar({
      id: uuidv4(),
      nome,
      genero,
      categoria,
      imagem,
      avaliacao,
    });
    // Limpa os campos após cadastrar o filme
    setNome("");
    setGenero("");
    setCategoria("");
    setImagem("");
    setAvaliacao("");
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSubmeter}>
        <h2>Preencha os dados para criar o card dos filmes/series</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do filme/serie"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Genero"
          placeholder="Ação, Comédia, Ficção..."
          valor={genero}
          aoAlterado={(valor) => setGenero(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Categoria"
          placeholder="Filme, Série, Animações..."
          valor={categoria}
          aoAlterado={(valor) => setCategoria(valor)}
        />
        <Campo
          label="Imagem"
          placeholder="Informe a url da imagem"
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Avaliações"
          items={avaliacoes}
          valor={avaliacao}
          aoAlterado={(valor) => setAvaliacao(valor)}
        />
        <Botao texto="Criar Card" />
      </form>
      <div className="logo-container">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={termoDePesquisa} // Controla o valor do input
          onChange={handlePesquisa} // Chama handlePesquisa ao digitar
        />
        <HiMagnifyingGlass className="pesquisar" />
      </div>
    </section>
  );
};

export default Formulario;

// // const [nomeAvaliacao, setNomeAvaliacao] = useState("");
// // const [corAvaliacao, setCorAvaliacao] = useState("");
// {
//   /* <form
// className="formulario"
// onSubmit={(evento) => {
//   evento.preventDefault();
//   cadastrarAvaliacao({
//     nome: nomeAvaliacao,
//     cor: corAvaliacao,
//   }); // sempre quando está dentro de {} quer dizer q é um objeto
// }}
// >
// <h2>Preencha os dados para criar uma nova avaliação.</h2>
// <Campo
//   obrigatorio // so colando dessa forma ja entende que é igual a true
//   label="Nome"
//   placeholder="Digite o nome da avaliação"
//   valor={nomeAvaliacao}
//   aoAlterado={(valor) => setNomeAvaliacao(valor)}
// />
// <Campo
//   obrigatorio
//   type="color"
//   label="Cor"
//   placeholder="Digite a cor da avaliação "
//   valor={corAvaliacao}
//   aoAlterado={(valor) => setCorAvaliacao(valor)}
// />
// <Botao texto="Criar uma nova avaliação" />
// </form> */
// }

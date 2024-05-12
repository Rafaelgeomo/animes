import "./Banner.css";

const Banner = () => {
  //JSX - Parece HTML mas é JSX
  return (
    <header className="cabecalho">
      <img
        src="/imagens/banner.jpg"
        alt="O banner principal da página de filmes"
      />
    </header>
  );
};

export default Banner;

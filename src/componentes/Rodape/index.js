import "./rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a
              href="https://web.facebook.com/rafa.jeronymo"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/imagens/facebook.png" alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/jeronymo_rafael"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/imagens/twitter.png" alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jeronymo.rafael/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/imagens/instagram.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section className="logoRafa">
        <img src="/imagens/logo.png" alt="" />
      </section>
      <section>
        <p>Desenvolvido por Rafael Jeronymo.</p>
      </section>
    </footer>
  );
};

export default Rodape;

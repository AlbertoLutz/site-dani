import "../styles/Header.css";

function Header() {
  return (
    <header className="cabecalho">
      <div className="log">
        <h1>Dani Cordeiro Fotografia</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="">Início</a>
          </li>
          <li>
            <a href="">Trabalhos</a>
          </li>
          <li>
            <a href="">Galerias</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

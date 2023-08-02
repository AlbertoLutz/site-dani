import Dani from "../assets/dani.jpg";
import "../styles/Card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={Dani} />
      <div className="overlay">
        <div class="texto">Ver Ensaio</div>
      </div>
      <h3>{props.nome}</h3>
      <hr />
      <p>{props.descricao}</p>
      <p>{props.local}</p>
    </div>
  );
}

export default Card;

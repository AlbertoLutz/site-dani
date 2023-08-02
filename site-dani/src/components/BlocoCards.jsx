import "../styles/BlocoCards.css";
import Card from "./Card";
import "../styles/main.css";

function BlocoCards() {
  return (
    <section className="bloco-cards">
      <h2>TRABALHOS RECENTES</h2>
      <hr />
      <div className="content">
        <Card nome="Daniele" descricao="Fotógrafa" local="Botucatu - SP" />
        <Card nome="Dani" descricao="Fotógrafa" local="Botucatu - SP" />
        <Card nome="Danizinha" descricao="Fotógrafa" local="Botucatu - SP" />
      </div>
    </section>
  );
}

export default BlocoCards;

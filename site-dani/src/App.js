import BlocoCards from "./components/BlocoCards";
import Header from "./components/Header";
import PrimeiraDobra from "./components/PrimeiraDobra";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <Header />
      <PrimeiraDobra />
      <BlocoCards />
    </div>
  );
}

export default App;

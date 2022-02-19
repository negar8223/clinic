import { Header } from "./components/Header";
import { Leyser } from "./components/Leyser";
import { Tazrigh } from "./components/Tazrigh";
import { Javansazi } from "./components/Javansazi";
import { Paksazi } from "./components/Paksazi";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="md:px-36">
      <Header />
      <Leyser />
      <Tazrigh />
      <Javansazi />
      <Paksazi />
      <Footer />
    </div>
  );
}

export default App;

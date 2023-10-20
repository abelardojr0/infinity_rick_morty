import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { GlobalStyles } from "../GlobalStyles";
import { Menu } from "./components/Menu";
import { Personagens } from "./pages/Personagens";
import { Episodios } from "./pages/Episodios";
import { Localizacoes } from "./pages/Localizacoes";
import { Detalhes } from "./pages/Detalhes";
import { Page404 } from "./pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Personagens />} />
        <Route path="personagem/:id" element={<Detalhes />} />
        <Route path="localizacoes" element={<Localizacoes />} />
        <Route path="episodios" element={<Episodios />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

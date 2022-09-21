import Configuracoes from "./screens/Configuracoes/Configuracoes";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dados from "./screens/Dados";
import Pesquisar from "./screens/Pesquisar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/config">Configurações</Link>
              </li>
              <li>
                <Link to="/dados">Dados</Link>
              </li>
              <li>
                <Link to="/pesquisar">Pesquisar</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/pesquisar" element={<Pesquisar />}></Route>
            <Route path="/config" element={<Configuracoes />}></Route>
            <Route path="/dados" element={<Dados />}></Route>
            <Route path="/" element={<></>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

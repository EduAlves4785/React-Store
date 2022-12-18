import { Home } from "./Pages/Home/Home";
import {Produto} from './Pages/Produto/Produto'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Carrinho } from "./Pages/Carrinho";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="produto/:id" element={<Produto/>}/>
          <Route path="/carrinho" element={<Carrinho/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

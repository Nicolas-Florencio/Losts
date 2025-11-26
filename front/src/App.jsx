import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import LastItems from "./components/LastItems/LastItems";
import Tutorial from "./components/Tutorial/Tutorial";
import Footer from "./components/Footer/Footer";
import Imagem from "./components/Imagem/Imagem";
import Button from "./components/Button/Button";

// Páginas
import Itens from "./pages/Itens";
import Cadastrar from "./pages/Cadastrar";
import Usuario from "./pages/Usuario";
import { useEffect } from "react";
import { useState } from "react";

function Home() {
  const botoes = [
    <Button tipo="primary" conteudo="Cadastrar Item" to="/cadastrar" />,
    <Button tipo="secondary" conteudo="Ver Itens" to="/itens" />,
  ];

  const [itens, setItens] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/buscar/3")
      .then((res) => res.json())
      .then((data) => {
        const convertidos = data.map((item) => ({
          status: "Perdido", // você pode trocar depois
          src: `http://localhost:3000/uploads/${item.foto}`,
          alt: item.nome_objeto,
          nome: item.nome_objeto,
          local: item.localizacao,
          data: new Date(item.data_registro)
            .toISOString()
            .split("T")[0]
            .split("-")
            .reverse()
            .join("/"),
        }));

        setItens(convertidos);
      })
      .catch((err) => console.error("ERRO AO BUSCAR:", err));
  }, []);

  return (
    <>
      <div className="App">
        <Navbar />
        <Banner
          imagem={<Imagem src="/menina.png" alt="menina com caderno" />}
          conteudo="Encontre ou registre objetos perdidos na sua faculdade"
          botoes={botoes}
        />
      </div>
      <LastItems titulo="Últimos Itens Cadastrados" itens={itens} />
      <Tutorial />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itens" element={<Itens />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/conta" element={<Usuario />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

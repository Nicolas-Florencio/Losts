import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import LastItems from './components/LastItems/LastItems';
import Tutorial from './components/Tutorial/Tutorial';
import Footer from './components/Footer/Footer';
import Imagem from './components/Imagem/Imagem';

// Páginas
import Itens from './pages/Itens';
import Button from './components/Button/Button';
// import Cadastrar from './pages/Cadastrar';

function Home() {
  const botoes = [
   <Button tipo='primary' conteudo='Cadastrar Item' />,
   <Button tipo='secondary' conteudo='Ver Itens' to='/itens' />
  ];

  const itens = [
    { status: "Perdido", src: "/celular.png", alt: "Celular", nome: "Celular", local: "Sala 12", data: "12/03/2025" },
    { status: "Perdido", src: "/celular.png", alt: "Celular", nome: "Celular", local: "Sala 12", data: "12/03/2025" },
    { status: "Perdido", src: "/celular.png", alt: "Celular", nome: "Celular", local: "Sala 12", data: "12/03/2025" },
  ];

  return (
    <>
      <div className="App">
        <Navbar />
        <Banner
          imagem={<Imagem src="/menina.png" alt="menina com caderno" />}
          conteudo='Encontre ou registre objetos perdidos na sua faculdade'
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
          {/* <Route path="/cadastrar" element={<Cadastrar />} /> */}
        </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
import './App.css'
import Banner from './components/Banner/Banner';
import LastItems from './components/LastItems/LastItems';

import Navbar from './components/Navbar/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tutorial from './components/Tutorial/Tutorial';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className={"App"}>
          <Navbar />
          <Banner />
        </div>
        <LastItems />
        <Tutorial />
        <Footer />

        <Routes>
          {/* <Route path="/" element={<Principal />} /> */}
          {/* <Route path="/itens" element={<Itens />} /> */}
          {/* <Route path="/cadastrar" element={<Cadastrar />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import './App.css'

import Navbar from './components/Navbar/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
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

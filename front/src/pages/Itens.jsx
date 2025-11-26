import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Button from "../components/Button/Button";
import LastItems from "../components/LastItems/LastItems";
import BuscarItem from "../components/BuscaItem/BuscarItem";
import { useEffect } from "react";
import { useState } from "react";

export default function Itens() {
  const botoes = [
    <Button tipo="primary" conteudo="Minha conta" />,
    <Button tipo="secondary" conteudo="Buscar Item" anchor="buscar-item" />,
  ];

  const [itens, setItens] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/buscar/")
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
        <Banner conteudo="Itens registrados" botoes={botoes} />
      </div>
      <LastItems titulo="Itens Cadastrados" itens={itens} />
      <BuscarItem />
    </>
  );
}

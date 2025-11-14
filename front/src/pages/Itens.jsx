import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Button from "../components/Button/Button";
import LastItems from "../components/LastItems/LastItems";
import BuscarItem from "../components/BuscaItem/BuscarItem";

export default function Itens() {
  const botoes = [
    <Button tipo="primary" conteudo="Minha conta" />,
    <Button tipo="secondary" conteudo="Registrar item" anchor="buscar-item" />,
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
        <Banner conteudo="Itens registrados" botoes={botoes} />
      </div>
      <LastItems titulo="Itens Cadastrados" itens={itens} />
      <BuscarItem />
    </>
  );
}

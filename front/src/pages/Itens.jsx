import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Button from '../components/Button/Button';

export default function Itens() {
  const botoes = [
    <Button tipo='primary' conteudo='Minha conta' />,
    <Button tipo='secondary' conteudo='Registrar item' to='/itens' />
  ];

  return (
    <div className="App">
        <Navbar />
        <Banner
          conteudo='Itens registrados'
          botoes={botoes}
        />
      </div>
  );
}

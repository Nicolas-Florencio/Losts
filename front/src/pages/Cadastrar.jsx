import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Button from "../components/Button/Button";
import Form from "../components/Form/Form";

export default function Cadastrar() {
  const navigate = useNavigate();

  function registrarItem(formData) {
    fetch("http://localhost:3000/cadastrar", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.mensagem);
        navigate("/itens");
      })
      .catch((err) => console.error("ERRO:", err));
  }

  const botoes = [
    <Button
      tipo="tertiary"
      conteudo="Registrar Item"
      onClick={registrarItem}
    />,
  ];

  const inputs = [
    {
      labelName: "Nome do Item",
      tipo: "text",
      nome: "nome_objeto",
      placeholder: "Digite o nome do item",
    },
    {
      labelName: "Descricao do Item",
      tipo: "text",
      nome: "descricao",
      placeholder: "Descreva o item com detalhes",
    },
    {
      labelName: "Localizacao do item",
      tipo: "text",
      nome: "localizacao",
      placeholder: "Informe o Campus ou Sala",
    },
    { labelName: "Data do Registro", tipo: "date", nome: "data_registro" },
    { labelName: "Upload de Foto", tipo: "file", nome: "arquivo" },
    {
      labelName: "Contato",
      tipo: "text",
      nome: "contato",
      placeholder: "Telefone ou e-mail",
    },
  ];

  return (
    <>
      <div className="App">
        <Navbar />
        <Banner conteudo="Cadastrar Item" botoes={botoes} />
      </div>

      <div className="container">
        <h1 className="titulo">Formulário de Cadastro</h1>
        <Form
          className="form"
          inputs={inputs}
          statusItem={true}
          nomeBotao="Cadastrar"
          apiForm={registrarItem}
        />
      </div>
    </>
  );
}

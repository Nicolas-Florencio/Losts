import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Button from "../components/Button/Button";
import Form from "../components/Form/Form";

export default function Cadastrar() {
    const endpoint  = "#";

    function registrarItem() {
        console.log("dassdas");
    }

    const botoes = [
        <Button tipo="tertiary" conteudo="Registrar Item" onClick={registrarItem} />,
    ];

    const inputs = [
        { labelName: "Nome do Item", tipo: "text", placeholder: "Digite o nome do item", nome: "item" },
        { labelName: "Descricao do Item", tipo: "text", placeholder: "Descreva o item com detalhes", nome: "detalhes" },
        { labelName: "Localizacao do item", tipo: "text", placeholder: "Insira o campus ou local", nome: "local" },
        { labelName: "Data do Registro", tipo: "date", placeholder: "", nome: "data" },
        { labelName: "Upload de Foto", tipo: "file", placeholder: "", nome: "arquivo" },
        { labelName: "Contato", tipo: "text", placeholder: "Telefone ou e-mail", nome: "contato" },
    ];

    return (
        <>
            <div className="App">
                <Navbar />
                <Banner conteudo="Cadastrar Item" botoes={botoes} />
            </div>
            <div className="container">
                <h1 className="titulo">Formulário de Cadastro</h1>
                <Form className="form" action={endpoint} inputs={inputs} statusItem={true} nomeBotao="Cadastrar" apiForm={registrarItem} />
            </div>
        </>
    );
}

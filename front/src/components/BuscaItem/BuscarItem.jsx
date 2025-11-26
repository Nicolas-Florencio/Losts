import { useState } from "react";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";
import styles from "./BuscarItem.module.css";

export default function BuscarItem() {
  const [modalAberto, setModalAberto] = useState(false);
  const [resultados, setResultados] = useState([]);

  async function consultarApi(formData) {
    const nome = formData.get("item");

    const res = await fetch(`http://localhost:3000/buscar-nome?nome=${nome}`);
    const data = await res.json();

    setResultados(data);
    setModalAberto(true);
  }

  const inputs = [
    {
      labelName: "Digite o nome do item",
      tipo: "text",
      placeholder: "Ex: Smartphone",
      nome: "item",
    },
  ];

  return (
    <>
      <div id="buscar-item" className={styles.container}>
        <h1 className={styles.titulo}>Buscar Itens</h1>
        <Form
          className={styles.form}
          inputs={inputs}
          statusItem={true}
          nomeBotao="Buscar"
          apiForm={consultarApi}
        />
      </div>

      <Modal aberto={modalAberto} fechar={() => setModalAberto(false)}>
        <h2>Resultado da Busca</h2>

        {resultados.length === 0 ? (
          <p>Nenhum item encontrado.</p>
        ) : (
          resultados.map((item) => (
            <div key={item.id}>
              <p>
                <strong>{item.nome_objeto}</strong>
              </p>
              <p>{item.localizacao}</p>
              <p>
                {new Date(item.data_registro)
                  .toISOString()
                  .split("T")[0]
                  .split("-")
                  .reverse()
                  .join("/")}
              </p>
              <hr />
            </div>
          ))
        )}
      </Modal>
    </>
  );
}

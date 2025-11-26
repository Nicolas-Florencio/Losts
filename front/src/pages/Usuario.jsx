import Navbar from "../components/Navbar/Navbar";
import { MdConstruction } from "react-icons/md";


export default function Usuario() {
    return (
        <>
            <div className="App">
                <Navbar />
            </div>
            <div className="manutencao">
                <h3>Página em desenvolvimento <MdConstruction /> </h3>
            </div>
        </>
    )
}
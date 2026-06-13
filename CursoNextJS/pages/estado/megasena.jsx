/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { mega } from "../../functions/mega"
import NumeroDisplay from "../../components/NumeroDisplay";

export default function megasena() {
const [qtde, setQtde] = useState(6);
const [numeros, setNumeros] = useState([]);

function renderizarNumeros(){
return numeros.map(
    n => <NumeroDisplay key={n} numero={n} />);
}


useEffect(() => {
        setNumeros(mega());
    },[]);

return (
<div
    style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    }}
>
    <h1>Mega Sena</h1>
    <div
    style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
    }}>
    {renderizarNumeros()}
    </div>
    <div>
    <input type="number" min={6} max={20} value={qtde}
        onChange={ev => setQtde(ev.target.value)}/>
    <button onClick={() => setNumeros(mega(qtde))}>
        Gerar Aposta
    </button>
    </div>
</div>
);

}

import style from "../Contador/jogador.module.scss"
import { useState } from "react";

export default function JogadorV2(props) {

    const [num,setNum] = useState(0);
    function addNum(){
        setNum(num+1);
    }

    function removeNum(){
        setNum(num-1);
    }
    return (
        <div className={style.card}>
            <h1>{props.nome}</h1>
            <div className={style.num}>
                <h1>{num}</h1>
            </div>
            <div className={style.buttonWrap}>
                <button onClick={() => {addNum()}}>+</button>
                <button onClick={() => {removeNum()}}>-</button>
            </div>
        </div>

    );
}
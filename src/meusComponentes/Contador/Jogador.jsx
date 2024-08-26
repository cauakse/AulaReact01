import { Component } from "react";
import style from "./jogador.module.scss"
export default class Jogador extends Component{

    constructor(props){
        super();
        this.props = props;
        this.state = {
            num : 0
        }
    }


    addNum(){
        this.setState({
            num:this.state.num+1
        })
    }

    removeNum(){
        this.setState({
            num:this.state.num-1
        })
    }

    render(){
        return(
            <div className={style.card}>
                <h1>{this.props.nome}</h1>
                <div className={style.num}>
                    <h1>{this.state.num}</h1>
                </div>
                <div className={style.buttonWrap}>
                    <button onClick={()=>{this.addNum()}}>+</button>
                    <button onClick={()=>{this.removeNum()}}>-</button>
                </div>
            </div>


        )
    }
}
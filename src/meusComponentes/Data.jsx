import { Component } from "react";

export default class Data extends Component{

    constructor (props) {
        super();
        this.props = props;
    }

    //Após montar
    componentDidMount(){
        console.log("O componente foi montado.");
    }

    //Após atualizar
    componentDidUpdate(){
        console.log("O componente foi atualizado");
        
    }

    //Quando desmonta
    componentWillUnmount(){
        console.log("O componente foi desmontado");
        
    }

    //Inicialização
    render(){
        return(
            <h1>{this.props.texto ? this.props.texto : ""}</h1>
        )
    }
}
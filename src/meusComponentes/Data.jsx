import { Component } from "react";

export default class Data extends Component{

    constructor (props) {
        super();
        this.props = props;
        this.data = new Date().toLocaleString();
    }

    //Após montar
    componentDidMount(){
        console.log("O componente foi montado.");
        this.data = new Date().toLocaleString();

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
            <h1>{this.props.texto ? this.props.texto + this.data : ""} </h1>
        )
    }
}
import { Component } from "react";

export default class Data extends Component{

    constructor (props) {
        super();
        this.props = props;
        this.state = {
                        data : new Date().toLocaleString()
                     }
    }

    pegaDataDe(timeZone){
        
    }

    //Após montar
    componentDidMount(){
        console.log("O componente foi montado.");
        this.setState({
            data: new Date().toLocaleString()
        })

    }

    //Após atualizar
    componentDidUpdate(){
        console.log("O componente foi atualizado");
        setTimeout(()=>{this.setState({
            data : new Date().toLocaleString()
        })},1000)
        
    }

    //Quando desmonta
    componentWillUnmount(){
        console.log("O componente foi desmontado");
        
    }

    //Inicialização
    render(){
        return(
            <h1>{this.props.texto ? this.props.texto + this.state.data : ""} </h1>
        )
    }
}
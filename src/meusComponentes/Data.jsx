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
        const dataAtual = new Date();
        let timeZoneFromDB = parseInt(timeZone);
        let diferencaTempo = timeZoneFromDB * 60 + dataAtual.getTimezoneOffset();
        let milisegundos = parseInt(dataAtual.getTime() + (diferencaTempo* 60 * 1000));
        const data = new Date(milisegundos);
        return data;
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
            data : this.pegaDataDe(this.props.timeZone).toLocaleString()
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
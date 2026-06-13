import { Component } from "react";

export default class Contador extends Component {

    // constructor(props){
    //     super(props);

    //     this.inc = this.inc.bind(this)
    // }

    state = {
        numero: this.props.valorInicial ?? 0,
        passo: this.props.passo ?? 0,
    };

    inc = () => {
        this.setState({
        numero: this.state.numero + this.state.passo,
        });
    };

    dec = () => {
        this.setState({
        numero: this.state.numero - this.state.passo,
        });
    };

    dec = () => {
        this.setState({
        numero: this.state.numero - this.state.passo,
        });
    };

    alterarPasso = (ev) => {
        this.setState({ passo: +ev.target.value });
    };

    renderForm() {
        return (
        <>
            <input
            type="number"
            min={1}
            max={1000}
            value={this.state.passo}
            onChange={this.alterarPasso}
            />
            <button onClick={this.dec}>-</button>
            <button onClick={this.inc}>+</button>
        </>
        );
    }

    render() {
        return (
        <div>
            <h1>Contador (Usando Classe)</h1>
            <h2>{this.state.numero}</h2>
            {this.renderForm()}
        </div>
        );
    }
}

// export default Contador
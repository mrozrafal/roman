import React from 'react';
import toRoman from "./toRoman";
import './App.scss';




class RomanConverter extends React.Component {
    state = {
        roman: null
    }
    handleChange = (event) => {
        const arabic = event.target.value;

        this.setState({ roman: toRoman(arabic) })
    }
    render() {

        return (
            <div className="Container">
                <div className="Converter">

                    <h1>Type your number between 1 and 3999</h1>
                    <div className="Converter__editor">
                        <label className="Label">Arabic: <input onChange={this.handleChange} type="number"></input></label>
                        <h1>Roman: {this.state.roman ? this.state.roman : "none"}</h1>
                    </div>

                </div>
            </div>

        )
    }
}
export default RomanConverter;
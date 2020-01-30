import React from 'react';
import toRoman from "./toRoman";




class RomanConverter extends React.Component {
    state = {
        roman: null
    }
    handleChange = (event) => {
        const arabic = event.target.value;
       
        this.setState({roman: toRoman(arabic)})
    }
    render() {

        return (
            <>
            <h1>Type your number between 1 and 3999</h1>
            <label>Arabic: <input onChange={this.handleChange} type="number"></input></label>
            <h1>Roman: {this.state.roman ? this.state.roman : "none" }</h1>
        </>
        )
}
}
export default RomanConverter;
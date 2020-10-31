import React, { Component, createContext } from 'react';
export const DenemeContext = createContext();

class DenemeContextProvider extends Component {

    state = {
        denemeContextData: ''
    }

    deneme = (denemeContextData) => {
        this.setState({
            denemeContextData: denemeContextData
        })
    }

    render() {
        return (
            <DenemeContext.Provider value={{ ...this.state, deneme: this.deneme, state: this.state }}>
                {this.props.children}
            </DenemeContext.Provider>
        );
    }
}
export default DenemeContextProvider;
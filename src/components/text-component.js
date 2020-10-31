import React, { setState, useState, useEffect, createContext, useContext } from 'react';
import { DenemeContext } from '../contexts/DenemeContext';

function TextComponent({ nameChange }) {
    // const { deneme, state } = useContext(DenemeContext);
    // const [denemeContextData, setdenemeContextData] = useState('');
    // const [userArray, setUserArray] = useState([]);
    // const [arrayTry, setarrayTry] = useState([]);
    useEffect(() => {
        console.log(nameChange)
    })
    
    return (
        <div>
            Text Component
        </div>
    );
}

export default TextComponent;
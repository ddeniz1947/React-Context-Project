import React, { useState, useEffect, createContext, useContext } from 'react';
import { DenemeContext } from '../contexts/DenemeContext';

function TextComponent({ nameChange }) {
    const { deneme, state } = useContext(DenemeContext);
    const [denemeContextData, setdenemeContextData] = useState('');
    return (
        <div>
            <h2>{state.denemeContextData}</h2>
            <input onChange={nameChange} type="text" name="name" placeholder="Ad Soyad" />
        </div>
    );
}

export default TextComponent;
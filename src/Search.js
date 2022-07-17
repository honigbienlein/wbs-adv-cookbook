import React, { useState } from 'react';

import "./index.css";
import LandingPage from './LandingPage';

export default function Search(){
    const [input, setInput] = useState('');
    
    const search = (event) =>{
        const input = event.target.value;
        setInput(input);
    };

    return(
        <>
            <input className="SearchBar" type="text" onChange={search}></input>
        </>
    )
}

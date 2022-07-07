import React from 'react';

import "./index.css";

export default function Search({search}){
    
    function search(){

        // api suche search
    }
    
    
    return(
    <header className="Header">
        
        <input className="Searchbar" type="text" value={search}></input>
               
    </header>
    )
}

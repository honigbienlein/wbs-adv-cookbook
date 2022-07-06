import React from 'react';

import "./index.css";

export default function Header(){
    return(
    <header className="Header">
        <img alt="logoCookbook" className="logo" src={ require('./images/logo.png') } />
        <input className="Searchbar" type="text"></input>
        <img alt="userProfile" className="profile" src={ require('./images/userProfile.png') } />        
    </header>
    )
}
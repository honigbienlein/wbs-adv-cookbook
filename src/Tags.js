import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

export default function Tags({tags=null}){

    tags=["Frühstück","Mittagessen","Kaffee und Kuchen","Abendbrot",
          "Indisch","Japanisch","Indonesisch","Bayrisch","Schwäbisch",
          "Deutsch","Vegetarisch","Vegan"]

    return(
        <div className="tags">
            {/* Option: 2 in a row */} 
            {tags.map((tag) => <Link className="tagElement">{tag}</Link>)}
        </div>
    )
}
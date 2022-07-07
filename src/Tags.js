import React from 'react';
import "./index.css";

export default function Tags({tags=null}){

    tags=["Frühstück","Mittagessen","Kaffee und Kuchen","Abendbrot",
          "Indisch","Japanisch","Indonesisch","Bayrisch","Schwäbisch",
          "Deutsch","Vegetarisch","Vegan"]

    return(
        <div className="tags">
            {/* Option: 2 in a row */} 
            <Link className="tagElement">
                {tags.map((tag) => <li>{tag}</li>)}
            </Link>
        </div>
    )
}
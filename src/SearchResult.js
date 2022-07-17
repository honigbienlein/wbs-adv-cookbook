import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function SearchResult() {
    const [recipes, setRecipe] = useState([]);
    const {searchWord} = useParams();
    
    const contentful = require("contentful");
    const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: 'f5m18cklnsqx',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: 'Pi0BGhsNg6RVKjHAICEns6PsCysyVGm6k3wYRqT_mc0'
    });

    useEffect(() => {
        if(recipes.length === 0){
            client
            .getEntries()
            .then( (res) =>{
                //console.log(res);
                const recipesList= res.items.filter((item) => {
                    if(item.fields.recipeName && item.fields.recipeName.includes(searchWord)) {
                        return item;
                    }
                }) 
                setRecipe(recipesList);
                console.log(recipesList);
            })
        .catch(err => console.log(err));    
        }

    }, [input])
  return (
    <div>SearchResult</div>
  )
}

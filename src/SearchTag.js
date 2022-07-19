import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function SearchTag() {
    const {find} = useParams();
    const [toFind, setToFind] = useState(find);
    const contentful = require("contentful");
    const client = contentful.createClient({
        space: 'f5m18cklnsqx',
        accessToken: 'Pi0BGhsNg6RVKjHAICEns6PsCysyVGm6k3wYRqT_mc0'
    });
    const [recipes, setRecipes] = useState([]);
    
    useEffect(()=>{
        if(recipes.length === 0){
            client.getEntries().then( (res) =>{
                const recipesList = res.items.filter((item) => {
                    if(item.fields.tags && item.fields.tags.includes(toFind)) {
                        console.log(item.fields.tags.includes(toFind))
                        return item;
                    }
                    return null;
                }) 
                setRecipes(recipesList);
            })
        }
    },[find])
    
    
    return (
        <div className="recipes">
          <h3>Just delicious</h3>
          <div className="recipeList">
            {(recipes.length === 0) ? 
                'loading ...' :
                recipes.map((recipe, index) => (
                    <Card className="card" key={index}>
                        <Card.Img className="recipeImg" variant="top" src={recipe.fields.picture[0]&&recipe.fields.picture[0].fields.file.url} />
                        <Card.Body>
                            <Card.Title className="title">{recipe.fields.recipeName}</Card.Title>
                            <Button className="button" variant="primary">Go to recipe</Button>
                        </Card.Body>
                    </Card>
                ))
            }
          </div>
        </div>
    )
}
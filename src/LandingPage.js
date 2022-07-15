import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function LandingPage() {

  const contentful = require("contentful");
    const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: 'f5m18cklnsqx',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: 'Pi0BGhsNg6RVKjHAICEns6PsCysyVGm6k3wYRqT_mc0'
    });
    // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
    const [recipes, setRecipes] = useState([]);
    if(recipes.length === 0){
        client
        .getEntries()
        .then( (res) =>{
            //console.log(res);
            const recipesList= res.items.filter((item) => {
                if(item.fields.recipeName) {
                    return item;
                }
            }) 
            setRecipes(recipesList);
        }
        )
    .catch(err => console.log(err));    
    }
    console.log(recipes);

  return (
    <div className="recipes">
      <h3>Just delicious</h3>
      <div className="recipeList">
                {(recipes.length > 0) ? 
                recipes.map((recipe, index) => 
                    (<Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={recipe.fields.picture[0]&&recipe.fields.picture[0].fields.file.url} />
                    <Card.Body>
                      <Card.Title>{recipe.fields.recipeName}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go to recipe</Button>
                    </Card.Body>
                  </Card>
                    
                    
                    
                    
/*                     <div className="recipe" key={index}>
                      <div className="card">
                        <img src={recipe.fields.picture[0]&&recipe.fields.picture[0].fields.file.url} className="card-img-top" alt="recipePicture" width="150px" height="110px" />
                        <div className="card-body">
                          <h5 className="card-title">{recipe.fields.recipeName}</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                    </div> */
                    )
                    ) 
                : ''}
            </div>
    </div>
  )
}

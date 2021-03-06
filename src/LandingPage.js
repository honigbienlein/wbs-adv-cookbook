import React from 'react';
import { Button, Card } from 'react-bootstrap';

export default function LandingPage({recipes}) {

  
  return (
    <div className="recipes">
      <h3>Just delicious</h3>
      <div className="recipeList">
        {(recipes.length > 0) ? 
          recipes.map((recipe, index) => (
            <Card className="card" key={index}>
              <Card.Img className="recipeImg" variant="top" src={recipe.fields.picture[0]&&recipe.fields.picture[0].fields.file.url} />
              <Card.Body>
                <Card.Title className="title">{recipe.fields.recipeName}</Card.Title>
                <Button className="button" variant="primary">Go to recipe</Button>
              </Card.Body>
            </Card>
            )) 
        : ''}
      </div>
    </div>
  )
}
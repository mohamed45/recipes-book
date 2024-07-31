import React from 'react';
import './RecipeDetails.css';

const RecipeDetails = ({ recipe }) => {
  if (!recipe) return <div className="recipe-details">Select a recipe to view details</div>;

  return (
    <div className="recipe-details">
      <h2>{recipe.name}</h2>
      <p><strong>Author:</strong> {recipe.author}</p>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <p><strong>Ingredients:</strong></p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p><strong>Instructions:</strong></p>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;

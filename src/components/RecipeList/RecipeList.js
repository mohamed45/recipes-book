import React, { useContext } from 'react';
import './RecipeList.css';
import { RecipesContext } from '../../context/RecipesContext.js';

const RecipeList = ({ onSelectRecipe, selectedRecipeId }) => {
  const { recipes } = useContext(RecipesContext);

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div
          key={recipe.id}
          className={`recipe-item ${recipe.id === selectedRecipeId ? 'active' : ''}`}
          onClick={() => onSelectRecipe(recipe)}
        >
          {recipe.name}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

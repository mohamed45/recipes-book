import React, { createContext, useState } from "react";


export const RecipesContext = createContext();



export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <RecipesContext.Provider
      value={{ recipes,setRecipes, selectedRecipe, setSelectedRecipe, addRecipe }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

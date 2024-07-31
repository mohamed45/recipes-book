import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header.js';
import RecipeList from './components/RecipeList/RecipeList.js';
import RecipeDetails from './components/RecipeDetails/RecipeDetails.js';
import Footer from './components/footer/Footer.js';
import Modal from './components/modal/Modal.js';
import RecipeForm from './components/addRecipe/AddRecipeForm.js';
import { RecipesContext } from './context/RecipesContext.js';
import img1 from "./assets/images/img12.png";
import img2 from './assets/images/img13.png';


const App = () => {
  const { selectedRecipe, setSelectedRecipe } = useContext(RecipesContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { recipes,setRecipes } = useContext(RecipesContext);

  
  useEffect(()=>{
    const apiCall = [
      {
        id: 1,
        name: "Spaghetti Bolognese",
        author: "John Doe",
        image: img1,
        ingredients: ["Spaghetti", "Tomato Sauce", "Ground Beef"],
        instructions: "Cook spaghetti. Prepare sauce. Mix together.",
      },
      {
        id: 2,
        name: "Chicken Curry",
        author: "Jane Smith",
        image: img2,
        ingredients: ["Chicken", "Curry Powder", "Coconut Milk"],
        instructions: "Cook chicken. Add curry powder and coconut milk. Simmer.",
      },
      {
        id: 3,
        name: "Spaghetti Bolognese",
        author: "John Doe",
        image: img1,
        ingredients: ["Spaghetti", "Tomato Sauce", "Ground Beef"],
        instructions: "Cook spaghetti. Prepare sauce. Mix together.",
      },
      {
        id: 4,
        name: "Chicken Curry",
        author: "Jane Smith",
        image: img2,
        ingredients: ["Chicken", "Curry Powder", "Coconut Milk"],
        instructions: "Cook chicken. Add curry powder and coconut milk. Simmer.",
      },
      {
        id: 5,
        name: "Spaghetti Bolognese",
        author: "John Doe",
        image: img1,
        ingredients: ["Spaghetti", "Tomato Sauce", "Ground Beef"],
        instructions: "Cook spaghetti. Prepare sauce. Mix together.",
      },
      
    ];
    setRecipes(apiCall);
  },[])

  return (
    <div className="app-container">
      <Header />
      <button onClick={() => setIsModalOpen(true)} className="create-recipe-button">
        Create Recipe
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RecipeForm onClose={() => setIsModalOpen(false)} />
      </Modal>
      <div className="main-container">
        <RecipeList onSelectRecipe={setSelectedRecipe} selectedRecipeId={selectedRecipe ? selectedRecipe.id : null}  className="recipe-list"/>
        <RecipeDetails recipe={selectedRecipe} className="recipe-details" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
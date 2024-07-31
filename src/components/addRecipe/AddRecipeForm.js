
import React, { useState, useContext } from 'react';
import './AddRecipeForm.css';
import { RecipesContext } from '../../context/RecipesContext.js';

const RecipeForm = ({ onClose }) => {
  const { addRecipe } = useContext(RecipesContext);
  const [formData, setFormData] = useState({
    name: '',
    author: '',
    image: '',
    ingredients: '',
    instructions: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(),
      ...formData,
      ingredients: formData.ingredients.split(',').map(ingredient => ingredient.trim())
    };
    addRecipe(newRecipe);
    setFormData({
      name: '',
      author: '',
      image: '',
      ingredients: '',
      instructions: ''
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <h2>Add New Recipe</h2>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Author:
        <input type="text" name="author" value={formData.author} onChange={handleChange} required />
      </label>
      <label>
        Image:
        <input type="file" accept="image/*" onChange={handleImageChange} required />
      </label>
      <label>
        Ingredients (comma-separated):
        <input type="text" name="ingredients" value={formData.ingredients} onChange={handleChange} required />
      </label>
      <label>
        Instructions:
        <textarea name="instructions" value={formData.instructions} onChange={handleChange} required />
      </label>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;

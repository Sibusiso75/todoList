import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "./Loading";
import "./cocktail.css"

function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getCocktails() {
      try {
        const res = await fetch(`${url}${id}`);
        const data = await res.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strDrinkAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,      
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
          
          } = data.drinks[0];
         
          const ingredients = [
            strIngredient1,
            
          ", ",
            strIngredient2,
            ", ",

          
            strIngredient3,
            ", ",
           
            strIngredient4,
            ", ",
            
          
            strIngredient5,
           
          
            strIngredient6,
            
           
            strIngredient7,
          ];
          const newCocktail = {
            name,
            image,
            info,
            glass,
            category,
            instructions,
            ingredients,
          
          }
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktails();
  }, [id]);
  if (loading) {
    return <Loading />;
  }

  const { name, image, info, glass, category, instructions, ingredients} =
    cocktail;
  return (
    <div style={{background:"black", color:"gray"}} >
      <br />
      <Link to="/" className ="backHome">Back home</Link>
      <div>

      <div className="glassAndInfo">
      <p>Name: {name}</p>
      <img src={image} alt={name} className="photo"  />
      <p> {info}</p>
      <p>Glass: {glass}</p>
      <p>Category: {category}</p>
      <p>Instructions: {instructions}</p>
      <p>Ingredients: {ingredients}
        
      
        </p>
        </div>
      </div>
    </div>
  );
}

export default SingleCocktail;

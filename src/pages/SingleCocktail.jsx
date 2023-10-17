import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
import "./cocktail.css"

function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const url = "https://wwwthecocktaildb.com/api/json/v1/1/lookup.php?i=";
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktails() {
      try {
        const res = await fetch(`${url}${id}`);
        const data = await res.json();
        if (data.drinks) {
          const {
            strcocktail: name,
            strcocktailThumb: image,
            strGlass: info,
            strCategory: category,
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
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
          ];
          const newCocktail = {
            name,
            image,
             info,
           
            category,
            instructions,
            ingredients,
          };
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

  const { name, image, info,  category, instructions, ingredients } =
    cocktail;
  return (
    <div >
      <Link to="/">Back home</Link>
       <div className="itemsContainer">

      <p>Name: {name}</p>
      <img src={image} alt={name}  style={{ height: "200px", width: "200px", marginLeft: 0 }} />
      <div className="glassAndInfo">

      <p>{info}</p>
      <p>Category:{category}</p>
      <p>Instructions:{instructions}</p>
      <p>Ingredients:{ingredients}</p>
      </div>
       </div>
    </div>
  );
}

export default SingleCocktail;

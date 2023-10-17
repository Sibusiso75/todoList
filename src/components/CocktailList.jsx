import React from "react";
import { Link } from "react-router-dom";
import "./cocktail.css";

function CocktailList({ id, name, image }) {
  return (
    <div className="itemsContainer">
      <div>
        <Link to={`/cocktail/${id}`}>
          <img
            src={image}
            alt={name}
           className="photo"
          ></img>
        </Link>
        <div className="glassAndInfo">
          <p>{name}</p>
          
        </div>
      </div>
    </div>
  );
}

export default CocktailList;

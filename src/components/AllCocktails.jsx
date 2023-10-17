import React from "react";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import "./cocktail.css";
import CocktailList from "./CocktailList";

function AllCocktails() {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <p>No results found</p>;
  }

  return (
    <div>
      {cocktails.map((cocktail) => {
        return <CocktailList key={cocktail.id} {...cocktail} />;
      })}
    </div>
  );
}

export default AllCocktails;

import React from "react";
import { useGlobalContext } from "../context";
import "./cocktail.css"

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef();

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }
  return (
    <section style={{margin:"30px"}}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          ref={searchValue}
          placeholder="search your favourite cocktail..."
          onChange={searchCocktail}
          className="inputSearch"
        />
      </form>
    </section>
  );
}

export default SearchForm;

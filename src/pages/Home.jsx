import React from "react";
import SearchForm from "../components/SearchForm";
import AllCocktails from "../components/AllCocktails";

function Home() {
  return (
    <main>
      <div className="welcomeIntro">

           <h3>Cocktail recipes🍸 </h3><br/>

<p>Looking for recipe to make your own cocktail? we got you!


</p>


      </div>
<SearchForm />
<AllCocktails />
       
    
     
    </main>
  );
}

export default Home;

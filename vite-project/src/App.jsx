import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Ingredients from "./components/Ingredients";
import Main from "./components/Main";
import Generate from "./components/Generate";

function App() {
  const [ingredientArr, setIngredientArr] = useState([]);

  const handleonclick = () => {
    console.log("hi");
  };

  return (
    <>
      <center>
        <div className="main-container">
          <Header></Header>
          <div className="inner-container">
            <Main
              ingredientArr={ingredientArr}
              setIngredientArr={setIngredientArr}
            ></Main>
            {ingredientArr.length !== 0 && (
              <Ingredients ingredientArr={ingredientArr}></Ingredients>
            )}
            {ingredientArr.length >= 3 && (
              <Generate handleonclick={handleonclick}></Generate>
            )}
          </div>
        </div>
      </center>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Ingredients from "./components/Ingredients";
import Main from "./components/Main";
import Generate from "./components/Generate";
import { getRecipe } from "./api";
import ApiResponse from "./components/ApiResponse";

function App() {
  const [ingredientArr, setIngredientArr] = useState([]);

  const [textresponse, settextresponse] = useState("");
  const handleonclick = () => {
    getRecipe(ingredientArr)
      .then((recipe) => {
        console.log("Generated Recipe:", recipe);
        settextresponse(recipe);
        console.log(textresponse);
      })
      .catch((error) => console.error("Error:", error.message));
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
            {textresponse && (
              <ApiResponse textresponse={textresponse}></ApiResponse>
            )}
          </div>
        </div>
      </center>
    </>
  );
}

export default App;

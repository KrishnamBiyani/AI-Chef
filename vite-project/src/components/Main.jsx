import React, { useRef } from "react";
import styles from "./Main.module.css";

function Main({ ingredientArr, setIngredientArr }) {
  const ingredientVal = useRef("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newIngerdientArr = [...ingredientArr, ingredientVal.current.value];
    setIngredientArr(newIngerdientArr);
    ingredientVal.current.value = "";
  };

  return (
    <>
      <div className={styles.container}>
        <form
          action=""
          className={styles.form_container}
          onSubmit={handleOnSubmit}
        >
          <input
            type="text"
            name=""
            ref={ingredientVal}
            className={styles.inp_button}
            placeholder="e.g. oregano"
          />
          <button className={styles.add_button}>+ Add Ingredient</button>
        </form>
      </div>
    </>
  );
}

export default Main;

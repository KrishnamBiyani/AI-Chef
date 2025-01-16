import React from "react";
import styles from "./Ingredients.module.css";

function Ingredients({ ingredientArr }) {
  return (
    <>
      <div className={styles.container}>
        <h2>Ingredients on hand :</h2>
        {ingredientArr.map((item) => (
          <li key={item} className={styles.list_item}>
            {item}
          </li>
        ))}
      </div>
    </>
  );
}

export default Ingredients;

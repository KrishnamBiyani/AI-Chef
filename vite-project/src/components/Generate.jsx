import React from "react";
import styles from "./Generate.module.css";

function Generate({ handleonclick }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text_container}>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <div className={styles.button_container}>
          <button onClick={handleonclick}>Get a recipe</button>
        </div>
      </div>
    </>
  );
}

export default Generate;

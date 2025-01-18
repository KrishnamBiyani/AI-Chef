import React from "react";
import Markdown from "react-markdown";
import styles from "./ApiResponse.module.css";

function ApiResponse({ textresponse }) {
  return (
    <>
      <div className={styles.suggested_recipe_container} aria-live="polite">
        <h2>AI Chef Recommend:</h2>
        <Markdown className={styles.text}>{textresponse}</Markdown>
      </div>
    </>
  );
}

export default ApiResponse;

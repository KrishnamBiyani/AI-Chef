import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.img_container}>
          <img
            className={styles.logo}
            src="src\assets\Chef Claude Icon.svg"
            alt=""
          />
        </div>
        <div className={styles.heading_container}>Chef Claude</div>
      </div>
    </>
  );
}

export default Header;

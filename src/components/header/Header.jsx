import React from "react";
import styles from "./Header.module.css";
import Navbar from "../navbar/Navbar";
import Logo from "./logo/Logo";

const header = (props) => {    
  return (
    <div className={styles.Header}>
      <Logo />
      <Navbar />
    </div>
  );
};

export default header;

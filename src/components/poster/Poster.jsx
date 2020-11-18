import React from "react";
import styles from "./Poster.module.css";
import { NavLink } from "react-router-dom";

const poster = (props) => {
  return (
    <NavLink to={"/title/"+props.id} className={styles.Link}>
      <div className={styles.Card} onClick={props.click}>
        <div className={styles.CardImage}>
          <img src={props.image} alt="poster"></img>
        </div>
        <div className={styles.CardBody}>
          <div className={styles.CardTitle}>
            {props.title} ({props.year})
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default poster;

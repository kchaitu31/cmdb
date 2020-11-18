import React, { Component } from "react";
import Movies from "../movies/Movies";
import styles from "./MoviesAndShows.module.css";

class MoviesAndShows extends Component {
  render() {    
    console.log("in movies and shows");
    return (
      <div className={styles.MoviesAndShows}>               
        <Movies type="movie" titleName="Latest Movies" />        
        <Movies type="series" titleName="Latest TV Shows"/>
      </div>
    );
  }
}

export default MoviesAndShows;

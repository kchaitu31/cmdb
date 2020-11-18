import React, { Component } from "react";
import Poster from "../../../components/poster/Poster";
import styles from "./Movie.module.css";

class Movie extends Component {
  render() {
    return (
      <div className={styles.Movie}>
        <Poster
          title={this.props.title}
          year={this.props.year}
          id={this.props.id}
          type={this.props.type}
          image={this.props.image}          
        />
      </div>
    );
  }
}

export default Movie;

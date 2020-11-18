import React, { Component } from "react";
import styles from "./Detail.module.css";
import axios from "../../axios";
import Spinner from "../../components/UI/spinner/Spinner";

class Detail extends Component {
  state = {
    detail: null,
    isLoading : true
  };

  componentDidMount() {
    let titleId = null;

    if(this.props.match){
      titleId = this.props.match.params.id;
    }

    

    axios
      .get("/", {
        params: {         
          i: titleId,
        },
      })
      .then((response) => {                
        this.setState({ detail: response.data, isLoading: false });        
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let detail = null;

    if (this.state.detail && !this.state.isLoading) {
      const details = this.state.detail;          
      detail = (
        <div className={styles.Detail}>
          <div className={styles.Desc}>
            <div className={styles.Title}>
              {details.Title} ({details.Year})
            </div>
            <div className={styles.Runtime}>
              <h3>{details.Rated}</h3>
              <span>|</span>
              <h3>{details.Runtime}</h3>
              <span>|</span>
              <h3>{details.Genre}</h3>
              <span>|</span>
              <h3>{details.Released} ({details.Country})</h3>
              <span>|</span>
              <h3>{details.Language}</h3>
            </div>
            <div className={styles.Plot}>
              {details.Plot}
            </div>
            <div className={styles.Runtime}>
              <h4>Director: </h4>
              <span>{details.Director}</span>
            </div>
            <div className={styles.Runtime}>
              <h4>Writers: </h4>
              <span>
                {details.Writer}
              </span>
            </div>
            <div className={styles.Runtime}>
              <h4>Actors: </h4>
              <span>{details.Actors}</span>
            </div>
            <div className={styles.Runtime}>
              <h4>Production: </h4>
              <span>{details.Production}</span>
            </div>
          </div>
          <div className={styles.Poster}>
            <img src={details.Poster} alt="poster"></img>
            <div className={styles.Runtime}>
              <span>
                <strong>IMDB Rating : </strong>
              </span>
              <span>{details.imdbRating}</span>
            </div>
            <div className={styles.Runtime}>
              <span>
                <strong>Metacritic Rating : </strong>
              </span>
              <span>{details.Metascore}</span>
            </div>
          </div>
        </div>
      );
    }
    else{
      detail = <Spinner />
    }

    return(
      <React.Fragment>
        {detail}
      </React.Fragment>
    );
  }
}

export default Detail;

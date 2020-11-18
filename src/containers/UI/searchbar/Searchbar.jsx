import React, { Component } from "react";
import styles from "./Searchbar.module.css";
import { withRouter } from "react-router-dom";

class searchBar extends Component {
  state = {
    searchString: "",
  };

  searchHandler = () => {
    this.props.history.push("/name/" + this.state.searchString);
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.Searchbar}>
          <input
            type="text"            
            onChange={(event) =>
              this.setState({ searchString: event.target.value })
            }
            name="search"
          />          
        </div>
        <button className={styles.Btn} onClick={this.searchHandler}>Search</button>
      </React.Fragment>
    );
  }
}

export default withRouter(searchBar);

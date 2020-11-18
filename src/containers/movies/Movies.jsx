import React, { Component } from "react";
import Movie from "../movies/Movie/Movie";
import axios from "../../axios";
import styles from "./Movies.module.css";
import ReactPaginate from "react-paginate";
import Spinner from "../../components/UI/spinner/Spinner";
import { withRouter } from "react-router-dom";

class Movies extends Component {
  state = {
    movies: null,
    pageCount: 0,
    isPaginationNeeded: false,
    isLoading: true,
    isSearch: false,
  };

  componentDidMount() {
    this.getMoviesAndShows(1);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.path !== "/") {
      if (this.props.location.key !== prevProps.location.key) {
        this.setState({ isSearch: true });
        this.getMoviesAndShows(1);
      }
    }
  }

  getMoviesAndShows(pageNumber) {
    const path = this.props.match
      ? this.props.match.path.includes("/name/") ||
        this.props.match.path.includes("/movies") ||
        this.props.match.path.includes("/shows")
      : false;

    if (path) {
      this.setState({ isPaginationNeeded: true });
    }

    let search = "";
    let year = "";
    let typeOfData = "";
    if (path && this.props.match.path.includes("/name/")) {
      search = this.props.match.params.name;
    } else {
      search = this.props.type === "movie" ? "movie" : "series";
      year = "";
      typeOfData = this.props.type;
    }

    axios
      .get("/", {
        params: {
          s: search,
          y: year,
          type: typeOfData,
          page: pageNumber,
        },
      })
      .then((response) => {
        this.setState({
          movies: response.data.Search,
          pageCount: response.data.totalResults,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  pageClickHandler = (event) => {
    this.getMoviesAndShows(event.selected + 1);
  };

  render() {
    let movies = null;
    let pagination = null;
    if (this.state.movies && !this.state.isLoading) {
      movies = this.state.movies.map((item) => {
        return (
          <Movie
            title={item.Title}
            year={item.Year}
            id={item.imdbID}
            type={item.Type}
            image={item.Poster}
            key={item.imdbID}
          />
        );
      });
    } else {
      movies = <Spinner />;
    }

    if (this.state.isPaginationNeeded) {
      pagination = (
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.pageClickHandler}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      );
    }

    let titleName = (
      <div className={styles.TitleName}>
        <h2>
          {this.props.titleName && !this.state.isSearch
            ? this.props.titleName
            : "Search Results"}
        </h2>
      </div>
    );
    // if (this.props.titleName && !this.state.isSearch) {
    //   titleName = (
    //     <div className={styles.TitleName}>
    //       <h2>{this.props.titleName}</h2>
    //     </div>
    //   );
    // }

    return (
      <React.Fragment>
        {titleName}
        <div className={styles.Movies}>
          {movies}
          <div className={styles.Pagination}>{pagination}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Movies);

import "./App.css";

import Layout from "../layout/Layout";
import { Redirect, Route, Switch } from "react-router-dom";
import Detail from "../detail/Detail";
import { Component } from "react";
import Movies from "../movies/Movies";
import MoviesAndShows from "../moviesandshows/MoviesAndShows";

class App extends Component {

  
  render() {    
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/title/:id" component={Detail} />
            <Route path="/name/:name"  component={Movies} />
            <Route path="/movies" component={(props) => <Movies type="movie" titleName="Latest Movies" {...props} />} />
            <Route path="/shows" component={(props) => <Movies type="series" titleName="Latest TV Shows" {...props}/>} />
            <Route path="/" exact component={MoviesAndShows} />    
            
            <Route path="/cmdb" exact render = {()=>{
                return(
                  <Redirect to="/" />
                );
              }} />
            
            
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

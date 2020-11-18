import React, { Component } from "react";
// import styles from "./Layout.module.css";
import Header from "../../components/header/Header";


class Layout extends Component {
  render() {    
    return (
      <React.Fragment>
        <Header />
        <main>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;

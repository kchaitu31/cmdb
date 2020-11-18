import React from "react";
import Link from "./link/Link";

const navLinks = props => {

    return(
        <React.Fragment>
            <Link to="/movies"> Movies </Link>
            <Link to="/shows"> Shows </Link>
        </React.Fragment>
    );
}

export default navLinks;
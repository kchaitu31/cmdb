import {NavLink} from "react-router-dom";
import styles from "./Link.module.css";

const link = props => {
    return(
        <NavLink to={props.to} className={styles.Link}> 
            {props.children}
        </NavLink>
    );
}

export default link;
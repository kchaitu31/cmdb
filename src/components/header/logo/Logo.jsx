import styles from "./Logo.module.css";
import {NavLink} from "react-router-dom";

const logo = props => (
    <NavLink className={styles.Logo} to="/">
        <span className={styles.Brand}>Movies & Shows</span>
    </NavLink>
    
);

export default logo;
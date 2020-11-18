import  styles  from "./Navbar.module.css";
import NavLinks from "./navlinks/Navlinks";
import Searchbar from "../../containers/UI/searchbar/Searchbar";

const navbar = (props) => {
  return (
    <div className={styles.Navbar}>     
      
      <Searchbar />
      <NavLinks />
    </div>
  );
};

export default navbar;

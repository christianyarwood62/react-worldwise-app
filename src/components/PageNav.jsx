import { NavLink } from "react-router-dom"; // NavLink adds an active class to the nav link when selected, which a normal Link doesnt do
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/Product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;

import styles from "./AppNav.module.css"; /* Can also destructure the styles object into just the nav variable */

function AppNav() {
  return <nav className={styles.nav}>App Navigation</nav>;
}

export default AppNav;

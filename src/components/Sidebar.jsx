import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
import Footer from "./Footer";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      {/* This outlet basically allows you to render the children route from App.jsx */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Sidebar;

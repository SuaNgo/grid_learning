import Link from "next/link";
import styles from "../page.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <h1>Homepage</h1>
        <div className={styles.nav_link}>
          <Link className={styles.navigator} href="/gamewiki">
            Wiki
          </Link>
          <Link className={styles.navigator} href="/portfolio">
            Portfolio
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

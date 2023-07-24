import styles from "./navbarGen.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarGen = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className={styles.navbar}>
        <h1>Homepage</h1>
        <div className={styles.nav_link}>
          <Link className={styles.navigator} href="/gi">
            Quay về
          </Link>
          <Link
            className={`${styles.navigator} ${
              pathname === "/gi/characters" ? `${styles.active}` : ""
            }`}
            href="/gi/characters"
            onClick={() => console.log(pathname)}
          >
            Nhân Vật
          </Link>
          <Link
            className={`${styles.navigator} ${
              pathname === "/gi/weapons" ? `${styles.active}` : ""
            }`}
            href="/gi/weapons"
          >
            Vũ khí
          </Link>
          <Link
            className={`${styles.navigator} ${
              pathname === "/gi/artifacts" ? `${styles.active}` : ""
            }`}
            href="/gi/artifacts"
          >
            Thánh Di Vật
          </Link>
          <Link
            className={`${styles.navigator} ${
              pathname === "/gi/calculator" ? `${styles.active}` : ""
            }`}
            href="/gi/calculator"
          >
            Máy tính
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavbarGen;

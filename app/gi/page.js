import styles from "./gi.module.css";
import Link from "next/link";

import FooterGen from "./layout/FooterGen.js";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.gi_page}>
        <nav className={styles.navbar}>
          <h1>Homepage</h1>
          <div className={styles.nav_link}>
            <Link className={styles.navigator} href="/">
              Quay về
            </Link>
            <Link className={styles.navigator} href="/gi/characters">
              Nhân Vật
            </Link>
            <Link className={styles.navigator} href="/gi/weapons">
              Vũ khí
            </Link>
            <Link className={styles.navigator} href="/gi/artifacts">
              Thánh Di Vật
            </Link>
            <Link className={styles.navigator} href="/gi/calculator">
              Máy tính
            </Link>
          </div>
        </nav>
        <div className={styles.gi_content}>
          <div className={styles.box1}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a ga
            </p>
          </div>
          <div className={styles.box}>
            <p>
              lley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className={styles.box}>Hello</div>
          <div className={styles.box}>Hello</div>
          <div className={styles.box2}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a ga
            </p>
          </div>
          <FooterGen styles={{ gridColumn: "span 4" }} />
        </div>
      </div>
    </main>
  );
}

"use client";
import styles from "./characters.module.css";
import FooterGen from "../layout/FooterGen";
import NavbarGen from "../layout/NavbarGen";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.gi_page}>
        <NavbarGen />
        <div className={styles.gi_characters}>
          <div className={styles.box}>
            <div className={styles.circle}></div>
            <div className={styles.character_pic}></div>
            <p>Albedo</p>
          </div>
          <div className={styles.box}>
            <div className={styles.circle}></div>
            <div className={styles.character_pic}></div>
            <p>Albedo</p>
          </div>
          <div className={styles.box}>
            <div className={styles.circle}></div>
            <div className={styles.character_pic}></div>
            <p>Albedo</p>
          </div>
          <div className={styles.box}>
            <div className={styles.circle}></div>
            <div className={styles.character_pic}></div>
            <p>Albedo</p>
          </div>
          <div className={styles.box}>
            <div className={styles.circle}></div>
            <div className={styles.character_pic}></div>
            <p>Albedo</p>
          </div>
          <div className={styles.box}>
            <div className={styles.circle}></div>
            <div className={styles.character_pic}></div>
            <p>Albedo</p>
          </div>
          <div className={styles.box}>
            <div className={styles.circle}></div>
            <div className={styles.character_pic}></div>
            <p>Albedo</p>
          </div>
          <div className={styles.box}>
            <div className={styles.circle}></div>
            <div className={styles.character_pic}></div>
            <p>Albedo</p>
          </div>
          {/**/}
          <FooterGen styles={{ gridColumn: "span 8" }} />
        </div>
      </div>
    </main>
  );
}

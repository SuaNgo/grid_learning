"use client";

import styles from "./page.module.css";
import Footer from "./layout/Footer";
import CardContainer from "./layout/CardContainer";
import Navbar from "./layout/Navbar";
export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.intro_container}>
        <div className={styles.intro_pic}></div>
        <div className={styles.intro}>
          <div className={styles.intro_item1}>
            <h1>Chào mừng bạn đến với SuaNgo</h1>
            <p>
              Web lập ra để mình làm project những gì mình thích chứ chả có tác
              dụng gì cả. Trong đây có thể là bách khoa toàn thư, kinh nghiệm
              chơi game của mình hoặc cũng chả có gì cả. Thx~~
            </p>
          </div>
          <div className={styles.intro_item1}>
            <h1>Có những gì</h1>
            <ul>
              <li>Portfolio, CV???</li>
              <li>Game wiki</li>
              <li>Một vài thứ chưa nghĩ ra...</li>
            </ul>
          </div>
          <div className={styles.intro_item1}>
            <h1>Còn những gì</h1>
            <ul>
              <li>CSS lặp nhiều</li>
              <li>Chia nhỏ code</li>
              <li>Ảnh intro mờ</li>
            </ul>
          </div>
        </div>
      </div>
      <CardContainer />
      <Footer />
    </main>
  );
}

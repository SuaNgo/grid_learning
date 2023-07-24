import { motion } from "framer-motion";
import { cardVariants1, cardVariants2 } from "./CardTransition";
import styles from "../page.module.css";
import Link from "next/link";
const CardContainer = () => {
  return (
    <div className={styles.content_container}>
      <Link className={styles.card_content} href="/hi3">
        <motion.div
          whileHover={{ scale: 1.1 }}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          className={styles.hi3}
          variants={cardVariants1}
        >
          <h1>Honkai Impact 3</h1>
        </motion.div>
      </Link>
      <Link className={styles.card_content} href="/hsr">
        <motion.div
          whileHover={{ scale: 1.1 }}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants2}
          className={styles.hsr}
        >
          <h1>Honkai Star Rail</h1>
        </motion.div>
      </Link>
      <Link className={styles.card_content} href="/gi">
        <motion.div
          whileHover={{ scale: 1.1 }}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants1}
          className={styles.gi}
        >
          <h1>Genshin Impact</h1>
        </motion.div>
      </Link>
      <Link className={styles.card_content} href="/zenless">
        <motion.div
          whileHover={{ scale: 1.1 }}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants2}
          className={styles.zzz}
        >
          <h1>Zenless Zone Zero</h1>
        </motion.div>
      </Link>
    </div>
  );
};

export default CardContainer;

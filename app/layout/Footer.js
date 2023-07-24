import styles from "../page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <p>Đây là dự án cá nhân, không thuộc tổ chức nào</p>
        <p>
          Tất cả hình ảnh mình lấy đều từ Hoyoverse, mình nghĩ vậy :
          <span>&#41;</span>. Nếu có sai sót gì mn có thể liên hệ với mình!
        </p>
      </div>
      <div className={styles.contact}>
        <a href="https://www.facebook.com/suango.0612/">
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
        </a>
        <a href="https://discordapp.com/users/526682863756771339">
          <FontAwesomeIcon icon={faDiscord} className={styles.icon} />
        </a>

        <a href="https://github.com/SuaNgo">
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default Footer;

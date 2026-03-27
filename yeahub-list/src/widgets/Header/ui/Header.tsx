import logo from "@/assets/logo.svg";
import logo_text from "@/assets/logo_text.svg";
import styles from "@/components/Header/Header.module.scss";

export const Header = function () {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_nav}>
          <div className={styles.header_logo}>
            <a className={styles.link}>
              <img src={logo} />
              <img src={logo_text} />
            </a>
          </div>
          <ul className={styles.header_menu}>
            <li> База вопросов </li>
            <li> Тренажёр </li>
            <li> Материалы</li>
            <li> Навыки (hh) </li>
          </ul>
        </div>

        <div className="header_reg">
          <button className={styles.header_btnWhite}> Вход </button>
          <button className={styles.header_btnPurple}> Регистрация </button>
        </div>
      </div>
    </header>
  );
};

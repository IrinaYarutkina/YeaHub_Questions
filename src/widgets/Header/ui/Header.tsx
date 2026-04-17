import { Logo } from "@/shared/ui";
import styles from "./Header.module.scss";
import { Container } from "@/shared/ui";
import { ROUTES } from "@/shared/config";
import { NavLink } from "react-router-dom";

const MENU_ITEMS = [
  { to: ROUTES.QUESTIONS, label: "База вопросов" },
  { to: ROUTES.SIMULATOR, label: "Тренажёр" },
  { to: ROUTES.MATERIALS, label: "Материалы" },
  { to: ROUTES.SKILLS, label: "Навыки (hh)" },
];

export const Header = function () {
  return (
    <header className={styles.header}>
      <Container className={styles.header_container}>
        <div className={styles.header_menu}>
          <Logo />
          <nav className={styles.header_nav}>
            {MENU_ITEMS.map((item) => (
              <NavLink
                to={item.to}
                key={item.to}
                className={styles.header_label}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className={styles.mob_prep}>
          <button className={styles.mob_btn}>Подготовка</button>
        </div>
        <div className={styles.header_reg}>
          <button className={`${styles.header_btn} ${styles.header_btnWhite}`}>
            {" "}
            Вход{" "}
          </button>
          <button className={`${styles.header_btn} ${styles.header_btnPurple}`}>
            {" "}
            Регистрация{" "}
          </button>
        </div>
      </Container>
    </header>
  );
};

{
  /* <div className={styles.container}>
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

      </div> */
}

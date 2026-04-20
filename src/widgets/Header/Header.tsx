import { Logo, ModalWindow} from "@/shared/ui";
import styles from "./Header.module.scss";
import { Container } from "@/shared/ui";
import { ROUTES } from "@/shared/config";
import { NavLink } from "react-router-dom";
import arrow from "@/shared/assets/icons/arrow.svg";
import { useToggle } from "@/shared/lib/hooks/useToggle";
import { Burger } from "@/shared/assets/components/Burger";

const MENU_ITEMS = [
  { to: ROUTES.QUESTIONS, label: "База вопросов" },
  { to: ROUTES.SIMULATOR, label: "Тренажёр" },
  { to: ROUTES.MATERIALS, label: "Материалы" },
  { to: ROUTES.SKILLS, label: "Навыки (hh)" },
];

export const Header = function () {

  const [isExpand, toggle] = useToggle(false); 
  const [isBurgerOpen, toggleBurger] = useToggle(false); 

  return (
  <> 
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
          
          <div className={styles.mob_prep}>
            <button className={styles.mob_btn} onClick={toggle}>
              <span> Подготовка </span>
              <img 
                src={arrow}
                alt=""
                className={`${styles.arrow_close} 
                ${isExpand ? styles.arrow_open : ""}
            `}
            />
            </button>

            {isExpand && (
            <ModalWindow onClose={toggle} className={styles.modalMenu}>
              <nav className={styles.mob_nav}>
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
            </ModalWindow>
          )}
          </div>
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

        <div className={styles.burgerWrapper}>
          <button
            className={styles.burgerButton}
            onClick={toggleBurger}
            aria-label="Открыть меню"
          >
            <Burger  className={styles.burger_menu}/>
          </button>
        </div>

        {isBurgerOpen && (
          <ModalWindow
            onClose={toggleBurger}
            className={styles.modalBurger}
          >
            <div className={styles.mob_reg}>
              <button
                onClick={toggleBurger}
                className={styles.reg_btn}
              >
                Вход
              </button>
              <button
                onClick={toggleBurger}
                className={styles.reg_btn}
              >
                Регистрация
              </button>
            </div>
          </ModalWindow>
        )}
      </Container>
    </header>
  </>
  );
};


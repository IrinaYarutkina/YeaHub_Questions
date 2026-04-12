import { Link } from "react-router-dom";
import logo from "@/shared/assets/icons/logo.svg";
import logo_text from "@/shared/assets/icons/logo_text.svg";
import { ROUTES } from "@/shared/config";
import styles from "./Logo.module.scss";

export const Logo = () => (
  <Link to={ROUTES.QUESTIONS} className={styles.logo}>
    <img src={logo} />
    <img src={logo_text} />
  </Link>
);

import styles from './BackButton.module.scss'
import { QuestArrowLeft } from "@/shared/assets/icons/questArrowLeft"

import { Link } from "react-router-dom"

type Props = {
  to: string;
  title: string;
}

export const BackButton = ({to, title} : Props) => {
  return (
    <Link to={to} className={styles.backButton}> 
      <QuestArrowLeft className={styles.icon} />
      <span className={styles.title}>{title}</span>
    </Link>
  )
}
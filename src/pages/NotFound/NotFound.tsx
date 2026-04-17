import styles from './NotFound.module.scss';
import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui";


export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper} > 
      <div className={styles.container}> 
        <h1 className={styles.title}> 404 </h1>
        <span className={styles.details}> 
          <p className={styles.text}> Страница не найдена </p>
          <Button onClick={() => navigate("/")}>
            Вернуться назад
          </Button>
        </span>
      </div>
    </div>

  )
}
import styles from './QuestionMeta.module.scss';

type Props = {
  rate: number;
  complexity: number;
}

export const QuestionMeta = ({rate, complexity} : Props) => {

  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Рейтинг: <span className={styles.level}> {rate} </span>
      </p>
      <p className={styles.text}>
        Сложность: <span className={styles.level}> {complexity} </span>
      </p>
    </div>
  )
}
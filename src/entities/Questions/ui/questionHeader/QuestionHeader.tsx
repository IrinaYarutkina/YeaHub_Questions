import styles from './QuestionHeader.module.scss';

type Props = {
  title: string | undefined;
  description: string | undefined;
}

export const QuestionHeader = ({title, description} : Props) => {
  return (
    <div className={styles.header_container}> 
      <h1 className={styles.title}>{title} </h1>
      <p className={styles.description}> {description} </p>
    </div>
  )
}
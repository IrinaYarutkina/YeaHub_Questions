import styles from './Guru.module.scss';
import type { Question } from '@/entities/Questions/types/QuestionsTypes';

type Props = {
  question: Question;
}
export const Guru = ({question}: Props) => {
  const {createdBy, questionSpecializations} = question;
  const [spec, ...rest] = questionSpecializations[0].title.split(" ");
  console.log(rest);
  return (
      <div className={styles.container}> 
        <h3 className={styles.name}> {createdBy.username} </h3>
        <p className={styles.spec}> {spec} Guru </p>
        <p className={styles.descriotion}> 
          Guru – это эксперты YeaHub, которые помогают развивать комьюнити.
        </p>
      </div>
  )
}

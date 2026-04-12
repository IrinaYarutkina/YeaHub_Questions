import { QuestionWidgetBlock } from '@/widgets/questionWidgetBlock/questionWidgetBlock';
import styles from './Question.module.scss'

type Props = {
  title: string;
  descriotion: string;
}
export const Question = ({title, descriotion} : Props) => (
  <div className={styles.Question}>
    <div className={styles.title_container}> 
      <h1>{title}</h1>
      <p>{descriotion} </p>
    </div>
    <QuestionWidgetBlock/>
    
  </div>
);
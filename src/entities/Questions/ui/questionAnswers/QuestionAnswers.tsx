import styles from './QuestionAnswers.module.scss';
import { marked } from "marked";
import { useToggle } from "@/shared/lib/hooks/useToggle";
import arrow from "@/shared/assets/icons/arrow.svg";

type Props = {
  title: string;
  contentAnswer: string | undefined;
  needExpand?: boolean;
  initialValue?: boolean;
  // description: string;
}
export const QuestionAnswers = ({title, contentAnswer, needExpand, initialValue} : Props) => {
  const htmlContent = contentAnswer ? marked.parse(contentAnswer) : '';
  const [isExpand, toggle] = useToggle(initialValue); // равзернуто?

  // needExpand //нужно развернуть?
  return (
    <div className={styles.answer_container}> 
      <h3 className={styles.title}>{title}</h3> 
      <div className={styles.answer_content} >
        <div dangerouslySetInnerHTML={{ __html: htmlContent }}/>
      </div>
      {needExpand && (
        <div className={styles.answer_toggle}> 
          <button onClick={toggle} className={styles.btn_Expand}> 
            <span>{isExpand ? 'Свернуть' : 'Развернуть'} </span> 
            <img 
            src={arrow}
            alt=""
            className={`${styles.arrow_close} 
            ${isExpand ? styles.arrow_open : ""}`}
            />
          </button>
        </div>
      )}
    </div>
  )
}
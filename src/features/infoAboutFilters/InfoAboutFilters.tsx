import { QuestionMeta } from '@/shared/ui/questionMeta';
import styles from './InfoAboutFilters.module.scss';
import type { Question } from '@/entities/Questions/types/QuestionsTypes';
import { FilterTag } from '@/shared/ui';

type Props = {
  question: Question;
  className?: string;
};

export const InfoAboutFilters = ({question, className} : Props) => {

  const {rate, complexity, questionSkills, keywords, createdBy} = question;
  return (
    <div className={[styles.container, className].filter(Boolean).join(' ')}> 

      <div className={styles.container_part}>
        <p className={styles.title}> Уровень: </p>
        <QuestionMeta rate={rate} complexity={complexity} />
      </div>

      <div className={styles.container_part}>
        <p className={styles.title}> Навыки:</p>
        <div className={styles.tags}>
          {questionSkills?.map((skill) => (
            <FilterTag key={skill.id} className={styles.tag}>
              {skill.title}
            </FilterTag>
          ))}
        </div>
      </div>

      <div className={styles.container_part}> 
        <p className={styles.title}> Ключевые слова: </p>
        <ul className={styles.keywords}> 
          {keywords.map((word) => (
            <li
              className={styles.word}
              key={word}
            >
              #{word}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.container_author}> 
        <span>Автор: </span> 
        <span className={styles.authorName}>{createdBy.username} </span> 
      </div>
    </div>
  )
}
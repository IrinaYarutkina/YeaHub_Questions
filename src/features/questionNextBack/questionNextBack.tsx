import styles from './questionNextBack.module.scss'
import QuestArrowLeft from '@/shared/assets/icons/questArrowLeft.svg'
import QuestArrowRight from '@/shared/assets/icons/questArrowRight.svg'
import { useQuestionNavigation } from './hooks/useQuestionNavigation';

type Props = {
	prevId?: number | null
	nextId?: number | null
}

export const QuestionNextBack = ({prevId, nextId} : Props) => { 
  const {goPrev, goNext} = useQuestionNavigation({prevId, nextId})


return (
  <div className={styles.container}> 
    <button 
      className={styles.button}
      onClick={goPrev}
    > 
    <img src={QuestArrowLeft}/> Предыдущий  </button>
    <button 
      className={styles.button}
      onClick={goNext}
    >Следующий <img src={QuestArrowRight }/> </button>
  </div>
)
}
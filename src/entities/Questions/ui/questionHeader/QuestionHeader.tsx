import { FilterToggle } from '@/shared/assets/components/FilterToggle';
import styles from './QuestionHeader.module.scss';
import { useState } from 'react';
import { ModalWindow } from '@/shared/ui';
import { InfoAboutFilters } from '@/features/infoAboutFilters';
import type { Question } from '../../types/QuestionsTypes';


type Props = {
  title: string | undefined;
  description: string | undefined;
  data: Question;
}


export const QuestionHeader = ({title, description, data} : Props) => {
  const [isFilterOpen, setFilterOpen ] = useState(false);

  return (
    <div className={styles.header_container}> 
      <div className={styles.header_question}> 
        <h1 className={styles.title}>{title} </h1>
        <p className={styles.description}> {description} </p>
      </div>

      <div className={styles.header_toggle}> 
      <button 
        className={styles.toggleBtn}
        onClick={()=>{setFilterOpen(true)}}
      > 
        <FilterToggle />
      </button>
      </div>

      {isFilterOpen && (
        <ModalWindow onClose={() => setFilterOpen(false)} className={styles.modalFilters}>
          <div className={styles.mob_filters}> 
            <InfoAboutFilters question={data} />

          </div>
        </ModalWindow >
      )}
    </div>
  )
}
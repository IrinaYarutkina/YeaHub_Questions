import styles from "./QuestionsList.module.scss";
import { useGetQuestionsQuery } from "@/entities/Questions/api/questionsApi";
import { ModalWindow, Pagination } from "@/shared/ui/";
import { QuestionInfo } from "@/entities/Questions/ui";
import { useFiltersQuestions } from "@/features/filters";
import { QuestionListSkeleton } from "./QuestionListSkeleton";
import { FilterFeature } from "@/shared/assets/components/FilterFeature";
import { useState } from "react";
import { FiltersBlock } from "@/features/FiltersBlock";

export const QuestionsList = () => {

  const {
    objWithFilters, 
    filtersInApi, 
    updatesFilters,
    // clearFilters
	} = useFiltersQuestions()

  const currentPage = objWithFilters.page; 
  const [isFilterOpen, setFilterOpen ] = useState(false);

  const { data, isLoading, isFetching } = useGetQuestionsQuery(filtersInApi);
  console.log(data);
  const questions = data?.data ?? [];
  const totalPages = Math.ceil((data?.total ?? 0) / (data?.limit ?? 1));

  const isPending = isLoading || isFetching

  if (isPending) {
    return <QuestionListSkeleton  />
  }

  return (
    <div className={styles.container_wrap}>
      <div className={styles.questions}>
        <div className={styles.questions_header}> 
          <h1 className={styles.title}> Вопросы </h1>
          <button 
          className={styles.btn_features}
          onClick={()=>{setFilterOpen(true)}}
          > 
            <FilterFeature />
          </button>
        </div>
        {isFilterOpen && (
        <ModalWindow onClose={() => setFilterOpen(false)} className={styles.modalFilters}>
          <div className={styles.mob_filters}> 
            <FiltersBlock />
          </div>
        </ModalWindow >
      )}

        <ul className={styles.list}>
          {questions.map((item) => (
            <li key={item.id}>
              <QuestionInfo question={item}/>
            </li>
          ))}
        </ul>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => updatesFilters({ page })}
      />
    </div>
  );
};

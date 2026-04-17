import styles from "./QuestionsList.module.scss";
import { useGetQuestionsQuery } from "@/entities/Questions/api/questionsApi";
import { Pagination } from "@/shared/ui/";
import { QuestionInfo } from "@/entities/Questions/ui";
import { useFiltersQuestions } from "@/features/filters";

export const QuestionsList = () => {

  const {
    objWithFilters, 
    filtersInApi, 
    updatesFilters,
    // clearFilters
	} = useFiltersQuestions()

  const currentPage = objWithFilters.page; 


  const { data, isLoading } = useGetQuestionsQuery(filtersInApi);
  console.log(data);
  const questions = data?.data ?? [];
  const totalPages = Math.ceil((data?.total ?? 0) / (data?.limit ?? 1));


  if (isLoading) return <p> Загрузка!</p>;
  return (
    <div className={styles.container_wrap}>
      <div className={styles.questions}>
        <h1 className={styles.title}> Вопросы {} </h1>
        <ul className={styles.list}>
          {questions.map((item) => (
            <li key={item.id}>
              <QuestionInfo
                title={item.title}
                shortAnswer={item.shortAnswer}
                id={item.id}
              />
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

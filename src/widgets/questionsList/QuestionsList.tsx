import { Accordeon } from "@/shared/ui/question-accordeon/Accordeon";
import styles from "./QuestionsList.module.scss";
import { useGetQuestionsQuery } from "@/entities/Questions/api/questionsApi";
import { Pagination } from "@/shared/ui/pagination";
import { useState } from "react";

export const QuestionsList = function () {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetQuestionsQuery({ page: currentPage });
  console.log(data);
  const questions = data?.data ?? [];
  const totalPages = Math.ceil((data?.total ?? 0) / (data?.limit ?? 1));

  if (isLoading) return <p> Загрузка!</p>;
  return (
    <div className={styles.container}>
      <div className={styles.questions}>
        <h1 className={styles.title}> Вопросы {} </h1>
        <ul className={styles.list}>
          {questions.map((item) => (
            <li key={item.id}>
              <Accordeon title={item.title} children={item.shortAnswer} />
            </li>
          ))}
        </ul>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

import { useParams } from "react-router-dom";
import { useGetQuestionByIdQuery } from "@/entities/Questions/api/questionsApi";
import { QuestionWidgetBlock } from '@/widgets/questionWidgetBlock/questionWidgetBlock';
import styles from './Question.module.scss'
import { Guru } from '@/widgets/Guru';
import { BackButton, Container } from "@/shared/ui";
import { QuestionSkeleton } from "./QuestionSkeleton";
import { InfoAboutFilters } from "@/features/infoAboutFilters";


export const Question = () => {
  const { id } = useParams();

  const { data, isLoading, isFetching } = useGetQuestionByIdQuery(Number(id));
    const isPending = isLoading || isFetching
  
    if (isPending) {
      return <QuestionSkeleton  />
    }
  if (!data) return null
  
  return (
    <Container >
      <nav className={styles.nav_backButton}>
        <BackButton to="/questions" title="Назад"/>
      </nav>

      <div className={styles.page_container}> 
        <div className={styles.main}> 
          <QuestionWidgetBlock question={data}/>
        </div>

        <div className={styles.sidebar}>
          <InfoAboutFilters question={data} className={styles.sidebarFilters}/>
          <Guru question={data} className={styles.sidebarGuru}/>
        </div>
      </div>

    </Container>
  )
};

//   <nav className={styles.mob_nav}>
// {MENU_ITEMS.map((item) => (
//   <NavLink
//     to={item.to}
//     key={item.to}
//     className={styles.header_label}
//   >
//     {item.label}
//   </NavLink>
// ))}
// </nav>
import { useNavigate } from "react-router-dom";

type Props = {
  prevId?: number | null;
  nextId?: number | null;
}
export const useQuestionNavigation = ({prevId, nextId} : Props) => {
  const navigate = useNavigate();
  // const prefetchQuestion = questionApi.usePrefetch('getQuestionById'); ///разобраться


  const goPrev = () => {
    if (prevId) {
      navigate(`/questions/${prevId}`);
    }
  }

  const goNext = () => {
    if(nextId) {
      navigate(`/questions/${nextId}`);
    }
    }

  return {goPrev, goNext}
}
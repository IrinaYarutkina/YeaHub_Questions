import { useSearchParams } from "react-router-dom";


export const useFiltersQuestions = () => {
  const [searchParams, setSearchParams] = useSearchParams(); //тек параметры и функция для их изме
  type filterValue = number[] | number | null; 

//   const specialization = ;
// const skills = ; 
//   const complexity = ;
//   const rate = ;
};
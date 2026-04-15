
import type { QuestionsParams } from "@/entities/Questions";
import type { QueryParams } from "@/shared/types";
import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";


export const useFiltersQuestions = () => {
  const [searchParams, setSearchParams] = useSearchParams(); //тек параметры и функция для их изме

  const objWithFilters = useMemo<QueryParams>(() => {

    const skillsParams = searchParams.get('skills');
    const complexityParams = searchParams.get('complexity');
    const rateParams = searchParams.get('rate');
    
    return {
      page: Number(searchParams.get('page')) || 1, 
      search: searchParams.get('search') || undefined,
      specialization: searchParams.get('specialization') || '11',
      skills: skillsParams ? skillsParams.split(',').map(Number).filter(skill => !isNaN(skill)) : undefined,
      complexity: complexityParams ? complexityParams.split(',').map(Number).filter(comp => !isNaN(comp)) : undefined,
      rate: rateParams ? rateParams.split(',').map(Number).filter(rate => !isNaN(rate)) : undefined,
      keywords: searchParams.get('keywords') || undefined,
    }
    }, [searchParams])

  const filtersInApi = useMemo<QuestionsParams>(() => {
    return {
      page: objWithFilters.page,
      search: objWithFilters.search,
      limit: 10,
      specialization: objWithFilters.specialization,
      skills: objWithFilters.skills?.join(','),
      complexity: objWithFilters.complexity?.filter(level => level >= 1 && level <=10).join(',') || undefined,
      rate:  objWithFilters.rate?.join(',') || undefined,
      keywords: objWithFilters.keywords,
    }
  }, [objWithFilters])

  const updatesFilters = useCallback(( updates: QueryParams) => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev)

      console.log(Object.keys(updates))
      if (Object.keys(updates).some(key => key !== 'page')) {
        newParams.set('page', '1')
        console.log(newParams)
      }
      for ( const [key, value] of Object.entries(updates)) {
        if (value === undefined || value === null || value === ''){
          newParams.delete(key);
        } else if (Array.isArray(value)) {
          if (value.length === 0) {
            newParams.delete(key);
          } else {
            newParams.set(key, value.join(','))
          }
        } else {
          newParams.set(key, String(value))
        }
      }
      return newParams
    })
  }, [setSearchParams])


  const clearFilters = useCallback(() => {
    setSearchParams({ specialization: "11" })
	}, [setSearchParams])

  return {
    objWithFilters, 
    filtersInApi, 
    updatesFilters,
    clearFilters
  };
}
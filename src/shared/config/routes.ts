export const ROUTES = {
  QUESTIONS: "/questions",
  QUESTION_FOR_LINK: (id: number) => `/questions/${id}`,
  SIMULATOR: "/simulator",
  MATERIALS: "/materials",
  SKILLS: "/skills",
} as const;

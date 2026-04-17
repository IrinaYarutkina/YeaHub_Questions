import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { BaseQuestions } from "@/pages/QuestionsList";
// import { Question } from "@/pages/Question/Question";
import { QuestionWidgetBlock } from "@/widgets/questionWidgetBlock/questionWidgetBlock"; 
import { NotFound } from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <BaseQuestions />,
      },
      {
        path: "questions",
        element: <BaseQuestions />,
      },
      {
        path: "questions/:id",
        element: <QuestionWidgetBlock />,
      },
      {
        path: "*",
        element: <NotFound/> ,
      },
    ],
  },
]);

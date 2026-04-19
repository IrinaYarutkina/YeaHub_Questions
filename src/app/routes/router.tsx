import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { BaseQuestions } from "@/pages/BaseQuestions";
import { NotFound } from "@/pages/NotFound";
import { Question } from "@/pages/Question/Question";

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
        element: <Question />,
      },
      {
        path: "*",
        element: <NotFound/> ,
      },
    ],
  },
]);

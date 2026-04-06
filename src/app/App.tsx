import { Header } from "@/widgets/Header";
import { Provider } from "react-redux";
import store from "./store/store";
import { BaseQuestions } from "@/pages/QuestionsList/BaseQuestions";
function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <BaseQuestions />
      </Provider>
    </>
  );
}

export default App;

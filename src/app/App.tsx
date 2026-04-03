import { Header } from "@/widgets/Header";
import { QuestionsList } from "@/widgets/questionsList/QuestionsList";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <QuestionsList />
      </Provider>
    </>
  );
}

export default App;

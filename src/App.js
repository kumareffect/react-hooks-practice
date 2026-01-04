import { Provider } from "react-redux";
import store from "./slice/store";
import View from "./View";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <View />
      </Provider>
    </>
  );
};

export default App;

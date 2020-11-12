import { Provider } from "react-redux";
import Router from "./router";
import { configureStore } from "./store";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;

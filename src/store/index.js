import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
import rootReducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (preloadedState) => {
  const store = createStore(rootReducer, preloadedState, compose(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(saga);

  return store;
};

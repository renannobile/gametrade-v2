import { put, takeEvery } from "redux-saga/effects";
import { DO_SEARCH, onSearchError, onSearchSuccess } from ".";

function* onSearch({ payload: { query } }) {
  try {
    yield put(
      onSearchSuccess([
        {
          id: 1,
          title: "Meua migo",
          short_description: "Jogo de aventura muito irado",
          price: 10,
          players: {
            min: 1,
            max: 2,
          },
          owner: {
            id: 123,
            first_name: "Paulo",
          },
        },
        {
          id: 2,
          title: "UNO",
          short_description: "",
          price: 15,
          players: {
            min: 1,
            max: 8,
          },
          owner: {
            id: 123,
            first_name: "Paulo",
          },
        },
        {
          id: 3,
          title: "Monopoly",
          short_description: "Banco imobiliário clássico",
          price: 23,
          players: {
            min: 4,
            max: 4,
          },
          owner: {
            id: 13,
            first_name: "Azevedo",
          },
        },
        {
          id: 4,
          title: "Jogo da vida",
          short_description: "ASdijasd",
          price: 15,
          players: {
            min: 3,
            max: 6,
          },
          owner: {
            id: 12,
            first_name: "Maria",
          },
        },
      ])
    );
  } catch (e) {
    yield put(onSearchError(e));
  }
}

function* searchSaga() {
  yield takeEvery(DO_SEARCH, onSearch);
}

export default searchSaga;

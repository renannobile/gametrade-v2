import { put, takeEvery } from "redux-saga/effects";
import { DO_SEARCH, onSearchError, onSearchSuccess } from ".";

function* onSearch({ payload: { tab } }) {
  try {
    yield put(
      onSearchSuccess([
        {
          id: 1,
          title: "Meua migo",
          short_description: "Jogo de aventura muito irado",
          price: 10,
          owner: {
            id: 123,
            name: "Paulo da Viola",
          },
        },
        {
          id: 2,
          title: "UNO",
          short_description: "Jogo para acabar amizadas",
          price: 15,
          owner: {
            id: 123,
            name: "Paulo da Viola",
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

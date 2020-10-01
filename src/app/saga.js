import { takeLatest, put, call } from "redux-saga/effects";

import { actions } from "./redux";
import { api } from "./api";

function* workerFetchDogs(action) {
  try {
    const result = yield call(api.dogs.getDogs, action.payload);
    yield put(actions.fetchDogBreedSuccess(result.data.message));
  } catch (error) {
    yield put(actions.setError(error.message));
  }
}

function* workerDogSaga() {
  yield takeLatest(actions.fetchDogBreed, workerFetchDogs);
}

export default workerDogSaga;

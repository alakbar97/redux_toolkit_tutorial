import { takeLatest, put, call } from "redux-saga/effects";

import { actions } from "./redux";
import { api } from "./api";

function* workerFetchDogs(action) {
  try {
    const result = yield call(api.dogs.getDogs, action.payload);
    yield put(actions.fetchDogBreedSuccess(result.data));
  } catch (error) {
    throw new Error(error);
  }
}

function* workerDogSaga() {
  yield takeLatest(actions.fetchDogBreed, workerFetchDogs);
}

export default workerDogSaga;

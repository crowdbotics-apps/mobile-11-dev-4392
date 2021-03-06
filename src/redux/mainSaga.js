import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth4000Saga from '../features/EmailAuth4000/redux/sagas';
import EmailAuth3983Saga from '../features/EmailAuth3983/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth4000Saga,
EmailAuth3983Saga,
EmailAuthSaga,
    
  ]);
}
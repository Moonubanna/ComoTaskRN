import {all, takeLatest, takeEvery} from 'redux-saga/effects';
import {API} from '../../constants';
import {postScanGoRequestCasesSaga} from './PostScanGoRequestCasesSaga';
function* watchScanGoRequestCaseAction() {
  yield takeLatest(API.APP_SCANGO_REQUEST, postScanGoRequestCasesSaga);
}
function* rootSaga() {
  yield all([
    watchScanGoRequestCaseAction(),
  ]);
}

export default rootSaga;

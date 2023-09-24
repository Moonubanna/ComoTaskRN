import {put} from 'redux-saga/effects';
import {
    API,
    APP_SCANGO_SUCCESS,
    APP_SCANGO_FAIL,
} from '../../constants';
import callApis from '../services/index';

export function* postScanGoRequestCasesSaga(action: any) {
  try {
    const data = yield callApis(action);
    yield put({
      type: APP_SCANGO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: APP_SCANGO_FAIL,
      payload: null,
    });
  }
}

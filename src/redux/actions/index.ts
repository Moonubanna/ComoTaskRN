import {
  API,
  APP_SCANGO_CLEAR,
} from '../../constants';

export function postScanGoRequestDataAction(data: object) {
  return {
    type: API.APP_SCANGO_REQUEST,
    payload: data,
  };
}

export function postClearScanGoRequestDataAction(data: any) {
  return {
    type: APP_SCANGO_CLEAR,
    payload: data,
  };
}
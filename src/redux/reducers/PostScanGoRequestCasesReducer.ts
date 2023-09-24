import {
    API,
    APP_SCANGO_SUCCESS,
    APP_SCANGO_FAIL,
    APP_SCANGO_CLEAR,
  } from '../../constants';
  
  export default function postScanGoRequestCasesReducer(
    state = {},
    action: any,
  ) {
    switch (action.type) {
      case API.APP_SCANGO_REQUEST:
        return {...state, loading: true};
  
      case APP_SCANGO_SUCCESS:
        return {...state, loading: false, response: action.payload};
  
      case APP_SCANGO_FAIL:
        return {...state, loading: false, response: null};
  
      case APP_SCANGO_CLEAR:
        return {...state, loading: false, response: null};
  
      default:
        return state;
    }
  }
  
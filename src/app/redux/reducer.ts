import produce from 'immer';

import {
  SET_TOKEN,
  SET_ERROR,
  SET_CURRENCIES,
  SET_TOAST,
  SET_USER_HISTORY,
  SET_APP_LOADING,
  SET_APP_POPUP,
  SET_USER_TRANSACTION,
} from './constants';
import {
  AppState,
  AppAction,
  GlobalError,
  Toast,
} from 'app/appTypes';

export const initialState: AppState = {
  appPopup: '',
  appLoading: false,
  currencies: [],
  error: {} as GlobalError,
  toastAlert: {} as Toast,
  userHistory: [],
  userTransaction: [],
  isResponseSuccess: false,
};

const AppReducer = (state: AppState = initialState, action: AppAction) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_TOAST:
        draft.toastAlert = action.payload;
        break;
      case SET_APP_POPUP:
        draft.appPopup = action.payload;
        break;
      case SET_APP_LOADING:
        draft.appLoading = action.payload;
        break;
      case SET_CURRENCIES:
        draft.currencies = action.payload;
        break;
      case SET_USER_HISTORY:
        draft.userHistory = action.payload;
        break;

      case SET_ERROR:
        draft.error = action.payload;
        break;
      case SET_USER_TRANSACTION:
        draft.userTransaction = action.payload;
        break;
    }
  });

export default AppReducer;

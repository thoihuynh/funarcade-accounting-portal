import { action } from 'typesafe-actions';

import {
  SET_TOKEN,
  SET_ERROR,
  GET_USER_INFO,
  GET_USER_WALLETS,
  SET_CURRENCIES,
  SET_TOAST,
  SET_USER_HISTORY,
  SET_APP_LOADING,
  SET_APP_POPUP,
  SET_USER_TRANSACTION,
} from './constants';
import {
  GlobalError,
  Currency,
  Toast,
  UserHistory,
  UserTransaction,
} from '../appTypes';

export const setToast = (value: Toast) => action(SET_TOAST, value);
export const setToken = (value: string | null) => action(SET_TOKEN, value);
export const setAppLoading = (value: boolean) => action(SET_APP_LOADING, value);
export const setAppPopup = (value: string) => action(SET_APP_POPUP, value);

export const getUserInfo = () => action(GET_USER_INFO);

export const setUserHistory = (value: UserHistory[]) =>
  action(SET_USER_HISTORY, value);

export const setError = (value: GlobalError) => action(SET_ERROR, value);

export const getUserWallets = () => action(GET_USER_WALLETS);

export const setCurrencies = (value: Currency[]) =>
  action(SET_CURRENCIES, value);

//transaction
export const setUserTransaction = (value: UserTransaction[]) =>
  action(SET_USER_TRANSACTION, value);

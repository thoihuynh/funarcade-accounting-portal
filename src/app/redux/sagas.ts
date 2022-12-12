import { takeLatest, put, select } from 'redux-saga/effects';
import jwt_decode from 'jwt-decode';

import {
  GET_USER_INFO,
  SET_USER_INFO,
  // SET_ERROR,
  SET_TOAST,
} from './constants';

import {
  UserInfo,
} from 'app/appTypes';

declare let window;

export default function* appSaga() {
  // yield takeLatest(GET_USER_INFO, getUserInfoFunc);
}
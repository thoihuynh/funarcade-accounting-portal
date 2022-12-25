import { ToastContent } from 'react-toastify';
import { ActionType } from 'typesafe-actions';

import * as actions from './redux/actions';

export interface AppState {
  appPopup: string;
  appLoading: boolean;
  currencies: Currency[];
  error: GlobalError;
  toastAlert: Toast;
  userHistory: UserHistory[];
  userTransaction: UserTransaction[];
  isResponseSuccess: boolean;
}

export interface UserHistory {
  gameNumber: string;
  walletId: string;
  multiplier?: string;
  result?: string;
  rollOverValue?: number;
  time: string;
  crash: number;
  listResult: number[];
  betAmount: number;
  userChoice: number;
  cashOut: number;
  cashOutAt: number | undefined;
  serverSeed: string;
  isJackpot: boolean;
  jackpotWinAmount: number;
  jackpotTotalAmount: number;
}

export interface Toast {
  msg: ToastContent;
  type: 'error' | 'success' | 'info' | 'warn' | 'default' | 'dark';
  theme?: 'light' | 'dark' | 'colored';
}

export interface UserInfo {
  username: string;
  id: string;
  email: string;
  name: string;
}
export interface GlobalError {
  message: string;
}
export type AppAction = ActionType<typeof actions>;

export interface GameProps {
  slug: string;
  name: string;
  url: string;
  icon: any;
  isSingle: boolean;
  cardImage: any;
  cardImageMobile: any;
  noControls?: boolean;
  gameRatio: number;
}


export interface Currency {
  id: number;
  name: string;
  shortname: string;
  sign: string;
  exchangeRate: number;
  createdAt: string;
  updatedAt: string;
}

export interface UserTransaction {
  id: string;
  walletId: string;
  amount: string;
  type: string;
  gameId: string;
  createdAt: string;
  updatedAt: string;
  source: string;
}

export interface TransactionSource {
  transactionHash: string;
}

export interface UserTransactionRes {
  totalCount: string;
  pageSize: number;
  data: UserTransaction[];
}

export interface NotificationDetail {
  text: string;
  lineNumber: number;
  time: string;
  isUnread: boolean;
}

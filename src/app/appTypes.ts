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

export interface BaccaratUserHistory {
  gameId: string;
  playId: string;
  gameMetaData: IGameMetaData;
  playMetaData: IPlayMetaData;
}

export interface IGameMetaData {
  gameId: string;
  gameNumber: string;
  gameResult: string;
  gameTime: string;
  isBankerPair: boolean;
  isPlayerPair: boolean;
}

export interface IPlayMetaData {
  betAmount: string;
  cashOut: number;
  choice: number;
  gameId: string;
  isBankerPair: boolean;
  isPlayerPair: boolean;
  playId: string;
  playTime: string;
  result: number;
  userId: number;
  walletId: number;
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
export interface userInfoRes {
  sub: string;
  preferred_username: string;
  name: string;
  email: string;
  email_verified: boolean;
}
export interface TokenData {
  id_token: string;
  access_token: string;
  expires_in: number;
  token_type: string;
  refresh_token: string;
  scope: string;
}
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

export interface ResultBoxProps {
  calResult: number;
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

interface Parent {
  chain: string;
  type: string;
}

interface Explorer {
  name: string;
  url: string;
  standard: string;
  icon?: string;
}

interface Ens {
  registry: string;
}

interface NativeCurrency {
  name: string;
  symbol: string;
  decimals: number;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface SignUpData {
  username: string;
  password: string;
  confirmPassword: string;
  email?: string;
}

export interface UserInfoByPublicAddress {
  sub: string;
  challenge: string;
  address: string;
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

export interface ChangePasswordData {
  newPassword: string;
  currentPassword: string;
}

export interface Setting2FAData {}

export interface NotificationDetail {
  text: string;
  lineNumber: number;
  time: string;
  isUnread: boolean;
}

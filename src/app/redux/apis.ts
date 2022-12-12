import {
  ChangePasswordData,
  LoginData,
  Setting2FAData,
  UserTransactionRes,
} from 'app/appTypes';
import globalAxios from '../../utils/globalAxios';

export const getUserInfoApi = token => {
  return globalAxios.get(
    `${process.env.REACT_APP_IDENTITY_ENDPOINT}/connect/userinfo`,
  );
};

export const getUserWalletsApi = async token => {
  // const data: WalletResult = (
  //   await globalAxios.get(`${process.env.REACT_APP_WALLET_ENDPOINT}/wallets`)
  // ).data;
  // return data;
};

export const getCurrenciesApi = token => {
  return globalAxios.get(`${process.env.REACT_APP_WALLET_ENDPOINT}/currencies`);
};

export const logout = token => {
  const idToken = localStorage.getItem('idToken');
  return globalAxios.get(
    `${process.env.REACT_APP_IDENTITY_ENDPOINT}/connect/endsession`,
    {
      params: {
        id_token_hint: idToken,
        post_logout_redirect_uri: process.env.REACT_APP_CALLBACK_ENDPOINT,
      },
    },
  );
};

export const getVerifyFairApi = async (
  gameId: string,
  token: string,
  gameSlug: string,
) => {
  const url = process.env.REACT_APP_CRASH_GAME_ENDPOINT?.replace(
    'crash',
    gameSlug,
  );

  const data = (await globalAxios.get(`${url}/verify?gameId=${gameId}`)).data;
  return data;
};

// get transaction
export const getUserTransactionApi = async (
  type: string,
  fromDate: string,
  toDate: string,
  hash: string,
  page: number,
  pageSize: number,
) => {
  const data: UserTransactionRes = await (
    await globalAxios.get(
      `${process.env.REACT_APP_WALLET_ENDPOINT}/transactions?fromDate=${fromDate}&toDate=${toDate}&type=${type}&hash=${hash}&page=${page}&pageSize=${pageSize}`,
    )
  ).data;
  return data;
};

// User setting: add email
export const postAddEmailApi = (email: string) => {
  const form = new URLSearchParams();
  form.append('email', email);

  return globalAxios.post(
    `${process.env.REACT_APP_IDENTITY_ENDPOINT}/add-email`,
    form,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );
};

// User setting: add username
export const postAddUsernameApi = (username: string) => {
  const form = new URLSearchParams();
  form.append('username', username);

  return globalAxios.post(
    `${process.env.REACT_APP_IDENTITY_ENDPOINT}/add-username`,
    form,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );
};

// User setting: change password
export const postChangePasswordApi = (data: ChangePasswordData) => {
  const form = new URLSearchParams();
  form.append('currentPassword', data.currentPassword);
  form.append('newPassword', data.newPassword);

  return globalAxios.post(
    `${process.env.REACT_APP_IDENTITY_ENDPOINT}/change-password`,
    form,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );
};

// User setting: setting 2FA
//TODO:
export const post2FASettingApi = (data: Setting2FAData) => {
  const form = new URLSearchParams();

  return globalAxios.post(
    `${process.env.REACT_APP_IDENTITY_ENDPOINT}/setting`,
    form,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );
};

//methods
//initial data for login
const LoginParams = () => {
  const form = new URLSearchParams();
  form.append('client_id', 'frontend');
  form.append('client_secret', 'secret');
  form.append('scope', 'openid offline_access wallet_address profile');
  return form;
};

// data for login Funarcade
const loginFunarcadeParams = (data: LoginData) => {
  const form = LoginParams();
  form.append('grant_type', 'password');
  form.append('redirect_uri', '');
  form.append('username', data.username);
  form.append('password', data.password);
  return form;
};

// data for login wit Wallet
const loginWalletParams = (address: string, signature: string) => {
  const form = LoginParams();
  form.append('grant_type', 'public_address');
  form.append('address', address);
  form.append('signature', signature);
  return form;
};

//data for refresh token
const refreshTokenFunarcadeParams = (refreshToken: string) => {
  const form = LoginParams();
  form.append('grant_type', 'refresh_token');
  form.append('redirect_uri', process.env.REACT_APP_CALLBACK_ENDPOINT ?? '');
  form.append('refresh_token', refreshToken);
  return form;
};

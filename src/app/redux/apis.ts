import { UserTransactionRes } from 'app/appTypes';
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

import {
  LIST_LANGUAGE,
  LOGIN_URL,
  ROUTES_HIDE_HEADER,
} from './constants';

declare let window;

export const checkDefaultLang = (lang: string) => {
  if (!lang) return 'en';

  const exist = LIST_LANGUAGE.find(x => x.value === lang);
  return exist ? lang : 'en';
};

// check pathname exact '/aaa' or all remaining path '/bbb/*'
const isInRoute = (pathName: string, routes: string[]) =>
  Boolean(
    routes.find(x => {
      if (x.endsWith('*')) return new RegExp(x).test(pathName);
      else return x === pathName;
    }),
  );

export const isHideHeader = (pathName: string) =>
  isInRoute(pathName, ROUTES_HIDE_HEADER);

export const clearAllLS = () => {
  if (window) {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('prev_pathname');
    localStorage.removeItem('web3_provider');
  }
};

export const formatAmount = (value: number | string | undefined) => {
  const num = Number(value);
  return typeof num === 'number'
    ? num % 1 !== 0
      ? num.toLocaleString(undefined, { maximumFractionDigits: 2 })
      : num.toLocaleString()
    : '';
};

export const clickLoginCommon = () => {
  localStorage.setItem('prev_pathname', window.location.pathname);
  window.location.href = LOGIN_URL;
};

export const emitCustomEvent = (name, data?: any) => {
  const event = new CustomEvent(name, {
    detail: data,
  });
  window.dispatchEvent(event);
};

export const getUniqueListByKey = (arr: any[], key: string) => {
  return arr.filter((v, i, a) => a.findIndex(t => t[key] === v[key]) === i);
};

export const isIOSCheck = () => {
  return (
    (/iPad|iPhone|iPod/.test(navigator.platform) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
    !window.MSStream
  );
};

export const isNotEmpty = (obj: object) =>
  obj && Object.values(obj).some(x => x?.[0]);

export const openInNewTab = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const openInNewWindow = (url: string, width = 400, height = 400) => {
  window.open(
    url,
    'popupWindow',
    `width=${width}, height=${height}, left=100, top=100, resizable=1, scrollbars=1, toolbar=0, menubar=0, location0, directories=0, status=1`,
  );
};

export const dateStrFormat = (date: Date | string | undefined) => {
  if (!date) return '';
  const d = new Date(date);

  let year = '' + d.getFullYear(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate();

  if (year.length < 4) {
    for (let i = year.length; i < 4; i++) {
      year = '0' + year;
    }
  } else if (year.length > 4) {
    year = year.slice(0, 4);
  }

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [day, month, year].join('/');
};

export const timeStrFormat = (date: Date | string | undefined) => {
  if (!date) return '';
  const d = new Date(date);

  let hours = '' + d.getHours(),
    minutes = '' + d.getMinutes(),
    seconds = '' + d.getSeconds();

  if (minutes.length < 2) minutes = '0' + minutes;
  if (seconds.length < 2) seconds = '0' + seconds;

  return [hours, minutes, seconds].join(':');
};

export const ISOtoLocalDatetimeStr = (isoDate: string | undefined) => {
  if (!isoDate) return '';

  const date = new Date(isoDate);
  return `${dateStrFormat(date)} - ${timeStrFormat(date)}`;
};

export const searchTextFilter = (text: string, str: string) =>
  text.toLowerCase().search(str.toLowerCase()) >= 0;

export const preventMinus = e => {
  if (e.code === 'Minus') {
    e.preventDefault();
  }
};

export const dateInputFormat = (d: Date) => {
  let year = '' + d.getFullYear(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate();

  if (year.length < 4) {
    for (let i = year.length; i < 4; i++) {
      year = '0' + year;
    }
  } else if (year.length > 4) {
    year = year.slice(0, 4);
  }

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

export const getSelectedWalletLS = () =>
  Number(localStorage.getItem('selected_wallet')) || 0;

export const spaceEvery2Char = (str: string) => {
  return str.match(/.{1,2}/g)?.join(' ') || str;
};

export const formatFirstCharacterUppercase = (str: string) => {
  return str ? str[0].toUpperCase() + str.slice(1) : '';
};

export const formatLimitString = (str: string, limit: number) => {
  let value = str ? str.slice(0, limit) : '';
  return value + '...';
};

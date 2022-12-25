import FATIcon from 'app/images/icons/currencies/FAT.svg';
import USDCIcon from 'app/images/icons/currencies/USDC.svg';

//enviroment
export const IS_DEV =
  process.env.REACT_APP_ENV === 'local' ||
  process.env.REACT_APP_ENV === 'dev' ||
  process.env.REACT_APP_ENV === 'staging';

export const IS_PROD = process.env.REACT_APP_ENV === 'prod';

// App config
export const LIST_LANGUAGE = [
  { value: 'en', name: 'EN: English' },
  { value: 'es', name: 'ES: Spanish' },
  { value: 'zh', name: 'ZH: Chinese' },
];

export const APP_TITLE = 'Funarcade';

export const CALLBACK_ROUTE = '/callback';
export const ROUTES_HIDE_HEADER = [CALLBACK_ROUTE, '/chat'];

export const animatedNumberOptions = {
  duration: 2000,
  decimals: 2,
  direct: true,
};

//time
export const BUFFER_TIME_MILLISECONDS = 5 * 60 * 1000; // 5 minutes
export const DELAY_TIME_MILLISECONDS = 4 * 60 * 1000; // 4 minutes
export const DELAY_TIME_API_RETRY = 500;

export const MAX_API_RETRY = 3;

export const CURRENCY_ICONS = [
  {
    shortName: 'fat',
    icon: FATIcon,
  },
  {
    shortName: 'usdc',
    icon: USDCIcon,
  },
];

export const MAX_CHARACTER_DISPLAYED = 8;
export const MAX_CHARACTER_HASHED_DISPLAYED = 10;

import FATIcon from 'app/images/icons/currencies/FAT.svg';
import USDCIcon from 'app/images/icons/currencies/USDC.svg';

//enviroment
export const IS_DEV =
  process.env.REACT_APP_ENV === 'local' ||
  process.env.REACT_APP_ENV === 'dev' ||
  process.env.REACT_APP_ENV === 'staging';

export const IS_PROD = process.env.REACT_APP_ENV === 'prod';

// network
export const NETWORK_NAME = 'Polygon';

export const MAINET_CHAIN_CONFIG = {
  chainId: 137,
  chainName: 'Polygon Mainnet',
  symbol: 'MATIC',
  rpcUrls: ['https://polygon-rpc.com'],
  blockExplorerUrls: ['https://polygonscan.com'],
  slip44CoinId: 966,
};

export const TESTNET_CHAIN_CONFIG = {
  chainId: 80001,
  chainName: 'Polygon Testnet',
  symbol: 'MATIC',
  rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
  blockExplorerUrls: ['https://mumbai.polygonscan.com'],
  slip44CoinId: 966,
};

export const APP_CHAIN_CONFIG = IS_PROD
  ? MAINET_CHAIN_CONFIG
  : TESTNET_CHAIN_CONFIG;

// App config
export const LIST_LANGUAGE = [
  { value: 'en', name: 'EN: English' },
  { value: 'es', name: 'ES: Spanish' },
  { value: 'zh', name: 'ZH: Chinese' },
];

export const APP_TITLE = 'Funarcade';

// style
export const HEADER_HEIGHT = 60;
export const PADDING_GAMEPAGE = 16;
export const TRANSITION_TIME = 0.3;
export const MOBILE_QUERY = `(max-width: 768px)`;

export const POPUP_TINY_WIDTH = 360;
export const POPUP_SMALL_WIDTH = 400;
export const POPUP_MEDIUM_WIDTH = 520;
export const POPUP_BIG_WIDTH = 600;

export const HIDE_AUTOBET_LS_NAME = 'hide_autobet_confirm';

export const WITH_CREDENTIALS_SOCKET = process.env.REACT_APP_ENV === 'prod';
export const SOCKET_TIMEOUT = 10000;

export const CALLBACK_ROUTE = '/callback';
export const ROUTES_HIDE_HEADER = [CALLBACK_ROUTE, '/chat'];

// authen
export const AUTHEN_SCOPE = 'openid offline_access profile email wallet';
export const CLIENT_ID = 'frontend';
export const LOGIN_URL = `${process.env.REACT_APP_IDENTITY_ENDPOINT}/authorize?client_id=${CLIENT_ID}&client_secret=secret&grant_type=authorization_code&scope=${AUTHEN_SCOPE}&redirect_uri=${process.env.REACT_APP_CALLBACK_ENDPOINT}&response_type=code&prompt=login`;

export const animatedNumberOptions = {
  duration: 2000,
  decimals: 2,
  direct: true,
};

// blockchain
export const CONTRACT_TOKEN = {
  FAT: '0x07Cb88E4B29B3b17e7925B3d975Fb3757231FD52',
  USDC: '0x0e82B72AEa1Fc9b48AC57d0584B8ccab646fb36A',
};

export const WEB_CONTRACT_ABI = [
  'function transfer(address _to, uint256 _value) public returns (bool success)',
];

export const WEB_CONTRACT_ABI_FAUCET = `[{"inputs":[{"internalType":"address","name":"token_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"input","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"when","type":"uint256"}],"name":"ClaimTo","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"cooldown","type":"uint256"}],"name":"SetClaimCooldown","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SetMaxTokenPerClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newAddress","type":"address"}],"name":"SetTokenAddress","type":"event"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimCooldown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"input","type":"address"}],"name":"claimTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"input","type":"address"}],"name":"lastClaimedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTokenPerClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"input","type":"address"}],"name":"nextClaimedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"cooldown","type":"uint256"}],"name":"setClaimCooldown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setMaxTokenPerClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newTokenAddress","type":"address"}],"name":"setTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userLastClaimedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]`;
export const CONTRACT_NAME = '0x0ad7d3aEC4C670Ad140B39504FB50d243DeD9c13';

export const TRANSACTION_POLYGON_URL = 'https://mumbai.polygonscan.com';
export const FAUCET_POLYGON_MATIC = 'https://faucet.polygon.technology/';

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
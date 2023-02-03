import { GameProps } from 'app/appTypes';

export const CRASH_GAME_SLUG = 'crash';
export const WHEEL_GAME_SLUG = 'wheel';
export const JACKPOT_GAME_SLUG = 'jackpot';
export const DICE_GAME_SLUG = 'dice';
export const HILO_GAME_SLUG = 'hilo';
export const ROAD_GAME_SLUG = 'road';
export const BACCARAT_GAME_SLUG = 'baccarat';
export const BLACKJACK_GAME_SLUG = 'blackjack';
export const SLOT_GAME_SLUG = 'slot';

export const GAME_LIST: GameProps[] = [
  {
    slug: CRASH_GAME_SLUG,
    name: 'Crash',
    url: '/multiplayer/' + CRASH_GAME_SLUG,
    isSingle: false,
  },
  {
    slug: WHEEL_GAME_SLUG,
    name: 'Wheel Of Fortune',
    url: '/multiplayer/' + WHEEL_GAME_SLUG,
    isSingle: false,
  },
  {
    slug: HILO_GAME_SLUG,
    name: 'Hilo',
    url: '/single-player/' + HILO_GAME_SLUG,
    isSingle: true,
  },
  {
    slug: ROAD_GAME_SLUG,
    name: 'Road To Riches',
    url: '/single-player/' + ROAD_GAME_SLUG,
    isSingle: true,
  },
  {
    slug: JACKPOT_GAME_SLUG,
    name: 'Jackpot',
    url: '/multiplayer/' + JACKPOT_GAME_SLUG,
    isSingle: false,
  },
  {
    slug: DICE_GAME_SLUG,
    name: 'Dice Roll',
    url: '/single-player/' + DICE_GAME_SLUG,
    isSingle: true,
  },
  {
    slug: BACCARAT_GAME_SLUG,
    name: 'Baccarat',
    url: '/multiplayer/' + BACCARAT_GAME_SLUG,
    isSingle: false,
  },
  {
    slug: BLACKJACK_GAME_SLUG,
    name: 'Blackjack',
    url: '/single-player/' + BLACKJACK_GAME_SLUG,
    isSingle: true,
  },
  {
    slug: SLOT_GAME_SLUG,
    name: 'Slot',
    url: '/single-player/' + SLOT_GAME_SLUG,
    isSingle: true,
  },
];

export const SINGLE_GAME_LIST = GAME_LIST.filter(x => x.isSingle).sort((a, b) =>
  a.name > b.name ? 1 : -1,
);

export const MULTI_GAME_LIST = GAME_LIST.filter(x => !x.isSingle).sort((a, b) =>
  a.name > b.name ? 1 : -1,
);

export const USER_HISTORY_LENGTH = 10;

// function importAll(r) {
//   let images = [] as any;
//   r.keys().forEach(item => {
//     images[item.replace('./', '')] = r(item);
//   });
//   return images;
// }

export const ERROR_MESSAGES = {
  EXCEED_MAX_BET: 'you have exceeded maximum bet',
};

export const findGame = (slug: string) => {
  if (!slug) return null;
  return GAME_LIST.find(
    g => g.slug.toLocaleLowerCase() === slug.toLocaleLowerCase(),
  );
};

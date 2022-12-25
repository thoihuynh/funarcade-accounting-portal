import CrashIcon from 'app/images/games/icon-crash.svg';
import CrashGameCard from 'app/images/list-games/Crash.svg';
import CrashGameCardMobile from 'app/images/list-games/mobiles/Crash-mobile.png';

import WheelIcon from 'app/images/games/icon-wheel.svg';
import WheelGameCard from 'app/images/list-games/Wheel.svg';
import WheelGameCardMobile from 'app/images/list-games/mobiles/Wheel-mobile.png';

import HiloIcon from 'app/images/games/icon-hilo.svg';
import HiloGameCard from 'app/images/list-games/Hilo.svg';
import HiloGameCardMobile from 'app/images/list-games/mobiles/Hilo-mobile.png';

import RoadIcon from 'app/images/games/icon-road.svg';
import RoadGameCard from 'app/images/list-games/Road.svg';
import RoadGameCardMobile from 'app/images/list-games/mobiles/Road-mobile.png';

import JackpotIcon from 'app/images/games/icon-jackpot.svg';
import JackpotGameCard from 'app/images/list-games/Jackpot.svg';
import JackpotGameCardMobile from 'app/images/list-games/mobiles/Jackpot-mobile.png';

import DiceIcon from 'app/images/games/icon-dice.svg';
import DiceGameCard from 'app/images/list-games/Dice.svg';
import DiceGameCardMobile from 'app/images/list-games/mobiles/Dice-mobile.png';

import BaccaratIcon from 'app/images/games/icon-baccarat.svg';
import BaccaratGameCard from 'app/images/list-games/Baccarat.svg';
import BaccaratGameCardMobile from 'app/images/list-games/mobiles/Baccarat-mobile.png';

import BlackjackIcon from 'app/images/games/icon-blackjack.svg';
import BlackjackGameCard from 'app/images/list-games/Blackjack.svg';
import BlackjackGameCardMobile from 'app/images/list-games/mobiles/Blackjack-mobile.png';

import SlotIcon from 'app/images/games/icon-slot.png';
import SlotGameCard from 'app/images/list-games/Slot.png';
import SlotGameCardMobile from 'app/images/list-games/mobiles/Slot-mobile.png';

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
    icon: CrashIcon,
    isSingle: false,
    cardImage: CrashGameCard,
    cardImageMobile: CrashGameCardMobile,
    gameRatio: 2 / 1,
  },
  {
    slug: WHEEL_GAME_SLUG,
    name: 'Wheel Of Fortune',
    url: '/multiplayer/' + WHEEL_GAME_SLUG,
    icon: WheelIcon,
    isSingle: false,
    cardImage: WheelGameCard,
    cardImageMobile: WheelGameCardMobile,
    gameRatio: 0,
  },
  {
    slug: HILO_GAME_SLUG,
    name: 'Hilo',
    url: '/single-player/' + HILO_GAME_SLUG,
    icon: HiloIcon,
    isSingle: true,
    cardImage: HiloGameCard,
    cardImageMobile: HiloGameCardMobile,
    gameRatio: 2 / 1,
  },
  {
    slug: ROAD_GAME_SLUG,
    name: 'Road To Riches',
    url: '/single-player/' + ROAD_GAME_SLUG,
    icon: RoadIcon,
    isSingle: true,
    cardImage: RoadGameCard,
    cardImageMobile: RoadGameCardMobile,
    noControls: true,
    gameRatio: 2 / 1,
  },
  {
    slug: JACKPOT_GAME_SLUG,
    name: 'Jackpot',
    url: '/multiplayer/' + JACKPOT_GAME_SLUG,
    icon: JackpotIcon,
    isSingle: false,
    cardImage: JackpotGameCard,
    cardImageMobile: JackpotGameCardMobile,
    gameRatio: 2 / 1,
  },
  {
    slug: DICE_GAME_SLUG,
    name: 'Dice Roll',
    url: '/single-player/' + DICE_GAME_SLUG,
    icon: DiceIcon,
    isSingle: true,
    cardImage: DiceGameCard,
    cardImageMobile: DiceGameCardMobile,
    gameRatio: 2 / 1,
  },
  {
    slug: BACCARAT_GAME_SLUG,
    name: 'Baccarat',
    url: '/multiplayer/' + BACCARAT_GAME_SLUG,
    icon: BaccaratIcon,
    isSingle: false,
    cardImage: BaccaratGameCard,
    cardImageMobile: BaccaratGameCardMobile,
    gameRatio: 2 / 1,
  },
  //blackjack
  {
    slug: BLACKJACK_GAME_SLUG,
    name: 'Blackjack',
    url: '/single-player/' + BLACKJACK_GAME_SLUG,
    icon: BlackjackIcon,
    isSingle: true,
    cardImage: BlackjackGameCard,
    cardImageMobile: BlackjackGameCardMobile,
    noControls: true,
    gameRatio: 2 / 1,
  },
  //slot
  {
    slug: SLOT_GAME_SLUG,
    name: 'Slot',
    url: '/single-player/' + SLOT_GAME_SLUG,
    icon: SlotIcon,
    isSingle: true,
    cardImage: SlotGameCard,
    cardImageMobile: SlotGameCardMobile,
    gameRatio: 2 / 1,
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

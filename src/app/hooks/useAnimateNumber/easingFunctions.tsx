// Follow link: https://github.com/baristna/use-animate-number

import { IeasingFunction } from './types';

export const easeInOutQuad: IeasingFunction = (elps, from, to, dr) => {
  if ((elps /= dr / 2) < 1) {
    return (to / 2) * elps * elps + from;
  }
  return (-to / 2) * (--elps * (elps - 2) - 1) + from;
};

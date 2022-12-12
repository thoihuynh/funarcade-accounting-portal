import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const scope = translations.components.LandingPageHeader;

export const messages = {
  quickLinks: () => _t(scope.quickLinks, 'Quick Links'),
  games: () => _t(scope.games, 'Games'),
  sports: () => _t(scope.sports, 'Sports'),
  lotteries: () => _t(scope.lotteries, 'Lotteries'),
  staking: () => _t(scope.staking, 'Staking'),
  gitbook: () => _t(scope.gitbook, 'Gitbook'),
};

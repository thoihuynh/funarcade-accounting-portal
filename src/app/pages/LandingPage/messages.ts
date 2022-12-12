import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const scope = translations.pages.LandingPage;

export const messages = {
  welcomeTo: () => _t(scope.welcomeTo, 'Welcome To'),
  communityOwnedCasino: () =>
    _t(scope.communityOwnedCasino, 'A community owned casino'),
  landingPageText1: () =>
    _t(
      scope.landingPageText1,
      "A crypto gambling platform with a focus on fairness, community and quality; Funarcade aims to provide the largest selection of fun, high quality Provably Fair games available in the crypto ecosystem. Stake our native Fun Arcade Token (FAT) to share in the casino's profits. We strive to be the crypto community's premier destination for worry-free, Provably Fair gambling.",
    ),
  products: () => _t(scope.products, 'Products'),
  staking: () => _t(scope.staking, 'Staking'),
  stakingText1: () =>
    _t(
      scope.stakingText1,
      'Stake to earn profits in a variety of Funarcade staking programs, including:',
    ),
  stakingText2: () =>
    _t(scope.stakingText2, 'FAT staking for platform profits'),
  stakingText3: () => _t(scope.stakingText3, 'USDC lottery bankroll staking'),
  stakingText4: () => _t(scope.stakingText4, 'Liquidity token staking'),
  stakingText5: () =>
    _t(
      scope.stakingText5,
      'View Funarcade Staking section and start earning today!',
    ),
  contactUs: () => _t(scope.contactUs, 'Contact Us'),
};

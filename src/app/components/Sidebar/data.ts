import iconHome from 'app/images/icons/home-active.svg';
// import iconMenu from 'app/images/icons/menu-icon.svg';
import iconClose from 'app/images/icons/icon-up.svg';
import iconOpen from 'app/images/icons/icon-down.svg';
import iconGame from 'app/images/icons/menu-game.svg';
import iconSport from 'app/images/icons/menu-sport.svg';
import iconLottery from 'app/images/icons/menu-lottery.svg';
import iconReport from 'app/images/icons/menu-report.svg';
import iconReward from 'app/images/icons/menu-reward.svg';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    active: true,
    icon: iconHome,
  },
  {
    title: 'Games',
    path: '/reports',
    icon: iconGame,
    iconClosed: iconClose,
    iconOpened: iconOpen,
    subNav: [
      {
        title: 'Report',
        path: '/reports',
        icon: iconReport,
      },
      {
        title: 'Reward Points',
        path: '/reward-points',
        icon: iconReward,
      },
    ],
  },
  {
    title: 'Lotteries',
    path: '/lotteries',
    icon: iconLottery,
  },
  {
    title: 'Sports',
    path: '/sports',
    icon: iconSport,
  },
];

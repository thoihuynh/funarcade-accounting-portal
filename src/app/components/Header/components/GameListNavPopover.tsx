import { GameListNav } from '../style';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import CommonLink from 'app/components/common/CommonLink';
import RightArrow from 'app/components/icons/RightArrow';
import { GameProps } from 'app/appTypes';

interface Props {
  elNavMenu: null | HTMLElement;
  navGameList: GameProps[];
  navLink: string;
  onExitedNavMenu: () => void;
  closeNavMenu: () => void;
  clickNavLink: () => void;
}

const GameListNavPopover = (props: Props) => {
  const {
    elNavMenu,
    navGameList,
    navLink,
    onExitedNavMenu,
    closeNavMenu,
    clickNavLink,
  } = props;
  const { t } = useTranslation();

  return (
    <GameListNav
      open={Boolean(elNavMenu)}
      anchorEl={elNavMenu}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      TransitionProps={{
        onExited: onExitedNavMenu,
      }}
      onClose={closeNavMenu}
      disableRestoreFocus
    >
      <ul>
        {navGameList.map(game => (
          <CommonLink key={game.url} to={game.url}>
            <li
              className="global_transition"
              key={game.url}
              onClick={clickNavLink}
            >
              <img src={game.icon} alt={game.name} width="24" height="24" />
              <span>{game.name}</span>
            </li>
          </CommonLink>
        ))}
      </ul>
      <div className="see-all">
        <CommonLink to={navLink} onClick={closeNavMenu}>
          {t(...messages.seeAll())} <RightArrow />
        </CommonLink>
      </div>
    </GameListNav>
  );
};

export default GameListNavPopover;

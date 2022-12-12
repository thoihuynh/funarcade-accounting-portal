import { useNavigate } from 'react-router-dom';
import { LandingPageHeaderWrap, StyledMenuItem } from './style';
import CommonSelect from '../common/CommonSelect';
import MultiplayerIcon from 'app/images/icons/multiplayer.svg';
import SportIcon from 'app/images/icons/sport.svg';
import LotteryIcon from 'app/images/icons/lottery.svg';
import StakingIcon from 'app/images/icons/staking.svg';
import GitBookIcon from 'app/images/icons/gitbook.svg';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import LanguageSelect from '../LanguageSelect';
import { useState } from 'react';
import CommonButton from '../common/CommonButton';
import FaucetIcon from '../../images/icons/faucet.svg';
import { useMediaQuery } from '@mui/material';
import { MOBILE_QUERY } from 'utils/constants';

const LandingPageHeader = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [openFaucet, setOpenFaucet] = useState(false);
  const isMobile = useMediaQuery(MOBILE_QUERY);

  const QUICK_LINKS = [
    {
      text: t(...messages.games()),
      linkTo: 'games',
      icon: MultiplayerIcon,
    },
    {
      text: t(...messages.sports()),
      linkTo: '',
      icon: SportIcon,
    },
    {
      text: t(...messages.lotteries()),
      linkTo: '',
      icon: LotteryIcon,
    },
    {
      text: t(...messages.staking()),
      linkTo: '',
      icon: StakingIcon,
    },
    {
      text: t(...messages.gitbook()),
      linkTo: '',
      icon: GitBookIcon,
    },
  ];

  const clickLogo = () => {
    navigate('/');
  };

  const onQuickLinkChange = (linkTo: string) => {
    navigate(`/${linkTo}`);
  };

  const closeFaucet = () => {
    setOpenFaucet(false);
  };

  const handleOpenFaucet = () => {
    setOpenFaucet(true);
  };

  return (
    <LandingPageHeaderWrap>
      <div className="left-side">
        <div className="logo" onClick={clickLogo}>
          <div className="icon">F</div>
          {!isMobile && (
            <div className="text">
              Fun<span className="highlight">arcade</span>
            </div>
          )}
        </div>
      </div>

      <div className="right-side">
        <LanguageSelect />

        <CommonButton
          text="Faucet"
          background="#FFE26F"
          fontWeight={700}
          height={40}
          width={120}
          onClick={handleOpenFaucet}
          icon={<img src={FaucetIcon} alt="Faucet" />}
        />

        <CommonSelect
          className="quick-link-select"
          onChange={onQuickLinkChange}
          value="quicklink"
          childrenBorderRadius={20}
        >
          <StyledMenuItem
            style={{ display: 'none' }}
            className="quick-link-menu-item"
            value="quicklink"
          >
            {t(...messages.quickLinks())}
          </StyledMenuItem>
          {QUICK_LINKS.map((x, index) => (
            <StyledMenuItem
              className="quick-link-menu-item"
              key={`level_${index + 1}`}
              value={x.linkTo}
            >
              <img src={x.icon} alt={x.text} />
              {x.text}
            </StyledMenuItem>
          ))}
        </CommonSelect>
      </div>
    </LandingPageHeaderWrap>
  );
};

export default LandingPageHeader;

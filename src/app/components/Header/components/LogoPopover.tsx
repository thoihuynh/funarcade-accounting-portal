import { LogoPopoverWrap, LogoWrap } from '../style';

interface Props {
  elLogo: null | HTMLElement;
  closeLogoDropdown: () => void;
  clickLogo: () => void;
}

const LogoPopover = (props: Props) => {
  const { elLogo, closeLogoDropdown, clickLogo } = props;

  return (
    <LogoPopoverWrap
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      anchorEl={elLogo}
      open={Boolean(elLogo)}
      onClose={closeLogoDropdown}
    >
      <LogoWrap onClick={clickLogo}>
        <div className="icon">F</div>
        <div className="text title">
          Fun<span className="highlight">arcade</span>
        </div>
      </LogoWrap>
    </LogoPopoverWrap>
  );
};

export default LogoPopover;

import React from 'react';
import logo from 'app/images/icons/icon-app.svg';
import { Wrapper } from './style';
import { Popover } from '@mui/material';

interface IProps {
  toggleSidebar: boolean;
  handleClickMenu: (link: string) => void;
}
const SidebarHeader = ({ toggleSidebar, handleClickMenu }: IProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleHover = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUnHover = () => {
    setAnchorEl(null);
  };

  return (
    <Wrapper>
      <div
        className="logo-menu d-flex"
        onMouseEnter={handleHover}
        onClick={() => handleClickMenu('')}
      >
        <img src={logo} alt="logo" />
        {toggleSidebar && <span>funarcade</span>}
        {Boolean(anchorEl) && (
          <Popover
            style={{ zIndex: 1401 }}
            anchorEl={anchorEl}
            open={true}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            onClose={handleUnHover}
            className="popover-logo-menu"
          >
            <div className="popover-logo-menu-detail" onClick={handleUnHover}>
              Back to Funarcade
            </div>
          </Popover>
        )}
      </div>
    </Wrapper>
  );
};

export default SidebarHeader;

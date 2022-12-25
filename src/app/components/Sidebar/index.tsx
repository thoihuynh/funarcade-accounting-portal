import { useState } from 'react';
import styled from 'styled-components';
import {
  SIDE_BAR_MIN_WIDTH,
  SIDE_BAR_MAX_WIDTH,
  COLOR_STYLES,
  FONT_SIZE_STYLES,
  FONT_WEIGHT_STYLES,
} from 'styles/variables';
import { SidebarData } from './data';
import SubMenu from './SubMenu';
import iconToggle from 'app/images/toggle.svg';
import logo from 'app/images/icons/icon-app.svg';

interface CssPropsNav {
  expand: boolean;
  width: number;
}

// const Nav = styled.div`
//   background: #15171c;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const NavIcon = styled(Link)`
//   margin-left: 2rem;
//   height: 2rem;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

const SidebarNav = styled.nav<CssPropsNav>`
  position: relative;
  width: ${props => props.width}px;
  background: ${COLOR_STYLES.BACKGROUND_MAIN_COLOR};
  border-radius: 0px 80px 80px 0px;
  min-height: 100vh;
  height: 100%;
  transition: width 350ms;

  .toggle {
    position: absolute;
    right: -12px;
    top: 64px;
    background: ${COLOR_STYLES.BACKGROUND_MAIN_COLOR};
    border-radius: 50%;
    transition: all 500ms;

    width: 24px;
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 12px;
      height: 12px;
    }

    .expand {
      animation: rotating_2 300ms ease-in-out forwards;
    }

    .collapse {
      animation: rotating_1 500ms ease-in-out forwards;
    }

    &:hover {
      cursor: pointer;
    }
  }

  @keyframes rotating_1 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }

  @keyframes rotating_2 {
    from {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
  padding: 0 28px;
  .logo-menu {
    padding-top: 60px;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: ${FONT_WEIGHT_STYLES.BOLD};
    color: #ffffff;
    cursor: pointer;
    justify-content: center;

    span {
      font-size: ${FONT_SIZE_STYLES.SMALL};
    }
  }
`;

const Sidebar = () => {
  const [expand, setExpand] = useState(true);

  const onToggleExpandMenu = () => setExpand(!expand);

  return (
    <>
      <SidebarNav
        expand={expand}
        width={expand ? SIDE_BAR_MAX_WIDTH : SIDE_BAR_MIN_WIDTH}
      >
        <>
          <SidebarWrap>
            <div className="logo-menu d-flex">
              <img src={logo} alt="logo" />
              <span>{expand ? 'funarcade' : ''}</span>
            </div>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} hideLabel={!expand} />;
            })}
          </SidebarWrap>
          <div className="toggle" onClick={onToggleExpandMenu}>
            <img
              src={iconToggle}
              className={expand ? 'expand' : 'collapse'}
              alt="toggle"
            />
          </div>
        </>
      </SidebarNav>
    </>
  );
};

export default Sidebar;

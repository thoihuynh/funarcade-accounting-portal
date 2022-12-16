import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLOR_STYLES, HEADER_HEIGHT, SIDE_BAR_WIDTH } from 'styles/variables';
import { SidebarData } from './data';
import SubMenu from './SubMenu';

interface CssPropsNav {
  sidebar: boolean;
}

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  height: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav<CssPropsNav>`
  background: ${COLOR_STYLES.WHITE};
  width: ${SIDE_BAR_WIDTH}px;
  height: 100vh;
  display: flex;
  justify-content: center;
  // left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#">
            <a onClick={showSidebar} />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLOR_STYLES, FONT_WEIGHT_STYLES } from 'styles/variables';

export const SidebarLink = styled(Link)`
  display: flex;
  color: ${COLOR_STYLES.DE_ACTIVE_GREY};
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: ${FONT_WEIGHT_STYLES.BOLD};
  &:hover {
    background: ${COLOR_STYLES.HOVER_GREY};
    border-right: 4px solid ${COLOR_STYLES.BLUE};
    cursor: pointer;
    color: ${COLOR_STYLES.PRIMARY};
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: {#632ce4};
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;

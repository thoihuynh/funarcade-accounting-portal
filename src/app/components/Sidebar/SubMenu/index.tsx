import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  COLOR_STYLES,
  FONT_SIZE_STYLES,
  FONT_WEIGHT_STYLES,
} from 'styles/variables';

export const SidebarLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  height: 60px;
  max-width: 208px;
  min-width: 60px;
  width: 100%;

  text-decoration: none;
  font-size: ${FONT_SIZE_STYLES.SMALL};
  font-weight: ${FONT_WEIGHT_STYLES.BOLD};
  color: ${COLOR_STYLES.TEXT_MAIN_COLOR_LIGHT};

  margin: 8px 0;
  border-radius: 40px;

  img {
    margin-left: 4px;
    margin-right: 4px;
    width: 32px;
  }

  .sub-menu-icon {
    .small-icon {
      width: 12px;
    }
  }

  &:hover {
    cursor: pointer;
  }
  &.active {
    background: #f9f9ff;
    color: ${COLOR_STYLES.TEXT_MAIN_COLOR};
  }

  &.collapse {
    justify-content: center;
  }
`;

export const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;

  font-weight: ${FONT_WEIGHT_STYLES.BOLD};
  color: ${COLOR_STYLES.TEXT_MAIN_COLOR_LIGHT};

  &.sub-menu-item {
    font-size: ${FONT_SIZE_STYLES.DEFAULT};
    padding-left: 1rem;
    gap: 8px;
  }

  &:hover {
    cursor: pointer;
  }
  &.active {
    background: #f9f9ff;
    color: ${COLOR_STYLES.TEXT_MAIN_COLOR};
  }
`;

const SubMenu = ({ item, hideLabel }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = (item: any) => {
    if (item.subNav) {
      setSubnav(!subnav);
      return;
    } else {
      //navigate router
    }
  };

  const classLink = (isActive: boolean, hideLabel: boolean) => {
    let c1 = isActive ? 'active ' : '';
    let c2 = hideLabel ? 'collapse ' : '';
    return c1 + c2;
  };

  return (
    <>
      <SidebarLink
        to={item.path}
        onClick={item => showSubnav(item)}
        className={classLink(item.active, hideLabel)}
      >
        <div className="d-flex">
          <img src={item.icon} alt="" />
          {!hideLabel && <span>{item.title}</span>}
        </div>
        <div className="sub-menu-icon">
          {item.subNav && subnav ? (
            <img src={item.iconClosed} alt="open" className="small-icon" />
          ) : item.subNav ? (
            <img src={item.iconOpened} alt="close" className="small-icon" />
          ) : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink
              to={item.path}
              key={index}
              className={classLink(item.active, hideLabel) + ' sub-menu-item'}
            >
              <img src={item.icon} alt="" />
              {!hideLabel && <span>{item.title}</span>}
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;

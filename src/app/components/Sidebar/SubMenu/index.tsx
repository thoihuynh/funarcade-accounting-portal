import React, { useState } from 'react';
import { DropdownLink, SidebarLink } from './style';

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

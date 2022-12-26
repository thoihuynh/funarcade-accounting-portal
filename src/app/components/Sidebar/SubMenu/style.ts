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
